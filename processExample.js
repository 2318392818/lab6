console.log(process.argv);
console.log(process.argv[3]);
console.log(process.env.LOGNAME);
console.log(process.pid);
console.log(process.cwd());
console.log(process.title);
console.log(process.memoryUsage());
console.log(process.uptime());
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
    });
    process.exit(0);