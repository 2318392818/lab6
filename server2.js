import { createServer } from 'http';
import 'dotenv/config';
const PORT = process.env.PORT;

// 模拟用户数据
const users = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' }
];

// 日志记录中间件
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
};

// 设置响应头为JSON格式
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
};

// 获取所有用户信息
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// 获取单个用户信息
const getUserHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id, 10));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: '用户不存在' }));
    }
    res.end();
};

// 处理未找到的路由
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'API不存在' }));
    res.end();
};

// 创建新用户
const createUserHandler = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        try {
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.statusCode = 201;
            res.write(JSON.stringify(newUser));
        } catch (e) {
            res.statusCode = 400;
            res.write(JSON.stringify({ error: '请求体不是有效的JSON' }));
        }
        res.end();
    });
};

// 创建HTTP服务器实例
const server = createServer((req, res) => {
    logger(req, res);
    jsonMiddleware(req, res);

    if (req.url === '/api/users' && req.method === 'GET') {
        getUsersHandler(req, res);
    } else if (req.url.startsWith('/api/users/') && req.method === 'GET') {
        getUserHandler(req, res);
    } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req, res);
    } else {
        notFoundHandler(req, res);
    }
});

// 服务器监听端口号，且启动成功后输出提示信息
server.listen(PORT, () => {
    console.log(`服务器已启动, 监听端口 ${PORT}`);
});