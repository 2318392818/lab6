const buff2 = Buffer.from('gkd');
const buf3 = Buffer.from('你好啊');
const buf4 = Buffer.from('你好啊', 'utf-8');
     const res = buf4.toString('utf-8');
     console.log(res);