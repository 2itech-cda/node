function printer(d) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(d.toTimeString().split(' ')[0]);
}

process.stdout.write(`\n`);

setInterval(() => printer(new Date()));
