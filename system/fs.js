const fs = require('fs');

let files = fs.readdirSync('.');

console.log('Début du programme');

for (let file of files) {
    console.log(file);
}

// Aynschrone
fs.readdir('../../html5/', (err, file) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(file);
});

fs.watch('.', (eventType, filename) => {
    console.log(`event type is: ${eventType}`);

    if (filename) {
        console.log(`filename provided: ${filename}`);
    } else {
        console.log('filename not provided');
    }
});

console.log('Fin du programme');