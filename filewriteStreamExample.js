import fs from 'fs';

// 使用 writeFile 写入文件
fs.writeFile('./bbb.txt', 'hello world', {
    encoding: 'utf-8',
    flag: 'a+'    
}, (err) => {
    if (err) {
        console.error('写入文件失败:', err);
    } else {
        console.log('写入文件成功');
    }
});

// 创建一个可写流
const writeStream = fs.createWriteStream('./ccc.txt', { flags: 'a' });

// 监听 open 事件
writeStream.on('open', (fd) => {
    console.log('文件被打开', fd);
});

// 向流中写入数据，并为每次写入提供回调
writeStream.write('coderwhy', (err) => {
    if (err) throw err;
    console.log('写入 coderwhy 成功');
});

writeStream.write('aaaa', (err) => {
    if (err) throw err;
    console.log('写入 aaaa 成功');
});

writeStream.write('bbbb', (err) => {
    if (err) throw err;
    console.log('写入 bbbb 成功');
});

// 结束写入，并提供回调处理结束状态
writeStream.end('哈哈哈哈', (err) => {
    if (err) throw err;
    console.log('写入 哈哈哈哈 成功');
});

// 监听 finish 事件
writeStream.on('finish', () => {
    console.log('写入完成了');
});

// 监听 close 事件
writeStream.on('close', () => {
    console.log('文件被关闭~');
});