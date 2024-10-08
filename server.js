import http from 'http'
const server = http.createServer(
    (req,res) =>{
        res.write("Hello World");
        res.end();
    }
);
server.listen(8000,()=>{
    console.log("服务器已启动监听端口:8000")
});