const buf = Buffer.alloc(8);
 console.log(buf);
 console.log(Buffer.from("你好啊"));
 buf[0] = 0xe4;
 buf[1] = 0xbd;
 buf[2] = 0xa0;
 console.log(buf);
 console.log(buf.toString());