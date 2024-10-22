import fs from 'fs'

const readStream = fs.createReadStream('./aaa.txt', {
    start: 8,          // 从第8个字节开始读取
    end: 22,           // 到第22个字节结束（不包含）
    highWaterMark: 3   // 每次读取3个字节
});

// 当有数据可读时触发
readStream.on('data', (data) => {
    console.log(data.toString());
});

// 当所有数据都被读取完毕时触发
readStream.on('end', () => {
    console.log('已经读取到end位置');
});

// 当流被关闭时触发
readStream.on('close', () => {
    console.log('文件读取结束, 并且被关闭');
});

// 如果你想记录文件被打开的状态，可以在 'data' 事件触发时简单记录一下
readStream.once('data', () => {
    console.log('通过流将文件打开~');
});