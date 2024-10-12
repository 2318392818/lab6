import 'dotenv/config';
import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs'
//获取当前文件路径
const __filename =url.fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

console.log(__dirname,__filename);

const PORT=process.env.PORT;
const server=http.createServer(async (req,res)=>{
    try{
        if(req.method==='GET'){
            let filePath;
            if(req.url==='/')
            {
                filePath =path.join(__dirname,"public","index.html");
            }
            else if(req.url==='/about')
            {
                filePath =path.join(__dirname,'public','about.html')
            }else{
                throw new Error("页面未找到");
            }
            const data = await fs.promises.readFile(filePath);
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.writeHead(200);
            res.end(data);
        }else{
            throw new Error("请求非法");
        }
    }catch (error){
        console.log(error);
        res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'})
        res.end(`<h1>服务器错误</h1>`);        
    }
});


server.listen(PORT,()=>{
    console.log(`服务器已启动，监听端口${PORT}`)
});

