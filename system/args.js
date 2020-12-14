// Les arguments

const args = process.argv.splice(2)
const name = args[0] || '';
const age = args[1] || 0;

console.log('name:', name, 'age:', age, "\n");

args.forEach(value => console.log(value));
