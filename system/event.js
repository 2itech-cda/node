console.log('Debut du programme');

process.on('beforeExit', code => {
    console.log('Avant sortie');
});

process.on('exit', code => {
    console.log('Fin du programme');
})

const age = process.argv[2];
if (age < 18) {
    process.stderr.write(`Error \n`)
    process.exit(1);
}

console.log('execution du programme');
