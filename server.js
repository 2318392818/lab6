import http from 'http'
const server = http.createServer(
    (req,res) =>{
        res.writeHead(500,{'Content-Type':'application/json'})
        res.end(JSON.stringify({message:"服务器错误"}))
    }
);
server.listen(8000,()=>{
    console.log("服务器已启动监听端口:8000")
});