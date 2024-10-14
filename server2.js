import { createServer } from 'http';
import 'dotenv/config';
const PORT = process.env.PORT;
// 模拟⽤户数据
const users = [
{ id: 1, name: '张三' },
{ id: 2, name: '李四' },
{ id: 3, name: '王五' }
];
// 创建HTTP服务器实例
const server = createServer((req, res) => {
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
   });
// 服务器监听端⼝号，且启动成功后输出提⽰信息
server.listen(PORT, () => {
console.log(`服务器已启动,监听端口${PORT}`);
});