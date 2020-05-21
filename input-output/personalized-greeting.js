let rlSync = require('readline-sync');

// let name = rlSync.question("What's your name?\n");
// console.log(`Good morning, ${name}!`);

let getFirstName = () => rlSync.question('What is your first name?\n')
let getLastName = () => rlSync.question('What is your last name?\n')

console.log(`Hello there, ${getFirstName()} ${getLastName()}!`)