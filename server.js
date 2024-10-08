import http from 'http'
const server = http.createServer(
    (req,res) =>{
        res.end("Hello World");
    }
);
server.listen(8000,()=>{
    console.log("服务器已启动监听端口:8000")
});