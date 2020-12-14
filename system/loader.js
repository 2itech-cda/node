let counter = 0;
let sprite = ['-', '\\', '|', '/'];

setInterval(() => {
    counter++;
    if (counter === sprite.length) {
        counter = 0;
    }
    process.stdout.write(`\r${sprite[counter]} loading...`);
}, 100)
