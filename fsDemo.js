import fs from 'fs/promises';
// readFile() - Promise 版本
fs.readFile('./test.txt', 'utf8')
.then(data => {
 console.log("Promise 版本:");
 console.log(data);
 console.log("====================================");
}).catch(err => {
 console.error(err);
});
// readFile() - Async/Await 版本
const readFile = async () => {
 try {
 const data = await fs.readFile('./test.txt',
'utf8');
 console.log("Async/Await 版本:");
 console.log(data);
 console.log("====================================");
 } catch (err) {
 console.error(err);
 }
}
const writeFile = async () => {
    try {
    await fs.writeFile('./test.txt', '写入文件内容', 'utf8');
    console.log("写入成功");
    } catch (err) {
    console.error(err);
    }
   }
   const appendFile = async () => {
    try {
    await fs.appendFile('./test.txt', '\\n这是追加⽂件内容', 'utf8');
    console.log("追加成功");
    } catch (err) {
    console.error(err);
    }
   };
    writeFile();
    readFile();
    appendFile();
