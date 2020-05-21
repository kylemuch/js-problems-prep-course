let rlSync = require('readline-sync');

let getFirstName = () => rlSync.question('What is your first name?\n')

console.log(`Hello there, ${getFirstName()}!`)

