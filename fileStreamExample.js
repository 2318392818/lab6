const fs = require('fs');

// 创建一个可读流，从第8个字节开始读取到第22个字节结束，每次读取3个字节
const readStream = fs.createReadStream('./aaa.txt', 
    {
        start: 8,          // 开始位置
        end: 22,           // 结束位置
        highWaterMark: 3   // 缓冲区的大小
    });

// 当有数据可读时触发
readStream.on('data', (data) => {
    console.log(data.toString()); // 打印读取的数据

    // 暂停读取流
    readStream.pause();

    // 延时2秒后继续读取
    setTimeout(() => {
        console.log('Continuing after delay...');
        readStream.resume();
    }, 2000);
});

// 当流结束时触发
readStream.on('end', () => {
    console.log('Stream ended.');
});