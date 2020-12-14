// node flag.js -name toto -age 100 -ville lyon

// getFlag('name')  toto
// getFlag('age')   100
// getFlag('ville') lyon
function getFlag(flagName) {
    const pos = process.argv.indexOf('-' + flagName);
    return pos === -1 ? null : process.argv[pos+1];
}

let firstName = getFlag('name');
let age = getFlag('age');
let ville = getFlag('ville');

console.log(firstName, age, ville);
