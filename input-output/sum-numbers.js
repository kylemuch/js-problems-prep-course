let rlSync = require('readline-sync');

let num1 = rlSync.question('Enter the first number.\n');
let num2 = rlSync.question('Enter the second number.\n');
let sum = Number(num1) + Number(num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}.`)


