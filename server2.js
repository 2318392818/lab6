import { createServer } from 'http';
import 'dotenv/config';
const PORT = process.env.PORT;
// 模拟⽤户数据
const users = [
{ id: 1, name: '张三' },
{ id: 2, name: '李四' },
{ id: 3, name: '王五' }
];
const logger = (req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next(); // 调⽤下⼀个中间件
        };
        const jsonMiddleware = (req, res, next) => {
                res.setHeader('Content-Type', 'application/json;charset=utf-8');
                next();
                };
// 创建HTTP服务器实例
const server = createServer((req, res) => {
        logger(req,res,()=>{
    if(req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
         res.write(JSON.stringify(users));
         res.end();
        } else if (req.url.match(/api\/users\/([0-9]+)/)&& req.method === 'GET') {
             const id = req.url.split('/')[3];
             const user = users.find(user => user.id == id);
             res.setHeader('Content-Type', 'application/json; charset=utf-8');
             if(user) {
             // 找到指定ID的⽤户，返回⽤户数据
             res.write(JSON.stringify(user));
            } else {
    // 对未定义的路由返回404错误
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 404;
    res.write(JSON.stringify({ message: '用户不存在' }));
            }
    res.end();
    }
    const getUsersHandler = (req, res) => {
        res.write(JSON.stringify(users));
        res.end();
        };
        // 路由处理 GET /api/users/:id
        const getUserHandler = (req, res) => {
        const id = req.url.split('/')[3];
        const user = users.find(user => user.id == id);
        if(user) {
        res.write(JSON.stringify(user));
        } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: '⽤户不存在' }));
        }
        res.end();
        };
        // 路由处理 404
        const notFoundHandler = (req, res) => {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'API不存在'
        }));
        res.end();
        };
        // 路由处理 POST /api/users
const createUserHandler = (req, res) => {
        let body = '';
        // 监听'data'事件，逐块接收请求体的数据
        req.on('data', (chunk) => {
        body += chunk.toString();
        });
        // 数据接收完毕后，触发'end'事件
        req.on('end', () => {
        const user = JSON.parse(body); // 解析请求体中
        的JSON数据
        users.push(user); // 将解析出的⽤户添加到⽤户列表
        中
        res.statusCode = 201; // 设置响应状态码为201，表⽰创建成功
        res.write(JSON.stringify(user)); // 返回创建的⽤户数据
        res.end();
        });
        };
        const server = createServer((req,res)=>{
                logger(req,res,()=>{
                        jsonMiddleware(req,res,()=>{
                                if(req,res === '/api/users' && req.method ==='GET'){
                                        getUsersHandler(req,res);
                                }else if(req.url.startsWith('/api/users/')&&req.method ==='GET'){
                                        getUserHandler(req,res);
                                }else if(req/url === '/api/users'&&req.method ==='POST')
                                {
                                        createUserHandler(req,res);
                                }else{
                                        notFoundHandler(req,res)
                                }
                                                      

                        })
                })
        })

   });
});
// 服务器监听端⼝号，且启动成功后输出提⽰信息
server.listen(PORT, () => {
console.log(`服务器已启动,监听端口${PORT}`);
});