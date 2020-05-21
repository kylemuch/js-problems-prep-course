//1.What does this code log to the console? Does executing the foo function affect the output? Why or why not?
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
//console.log(bar) prints 1, we're calling it in the global scope and in the global scope, bar is pointing to the value 1.
//executing foo does not affect the output, since let is used inside the foo function, a new local variable var is declared within that scope
//and points to the value 2. Nothing you do to this variable affects the global bar.

//5. What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//It doesn't log anything because it returns prior to the log statement.

//6. What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

//It doesn't log anything, there is no log statement.