
let multiplier = () => {
  let rlSync = require('readline-sync');
  let num1 = Number(rlSync.question('What is the first number?\n'));
  let num2 = Number(rlSync.question('What is the second number?\n'))
  console.log(`${num1} * ${num2} = ${num1 * num2}.`)
}

multiplier()



