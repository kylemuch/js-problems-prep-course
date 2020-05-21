//3.The following code causes an infinite loop(a loop that never stops iterating).Why ?

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }
//You're assigning the value of 1 to counter every time the loop iterates instead of comparing
//it to 1. Use "===" instead of the assignment operator "=".


//4. Does the following code produce an error? Why or why not? What output does this code send to the console?

// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

//this does not produce an error, you aren't incrementing i in the declaration but you do it in
//the body of the loop so it still occurs.

// let i;
// for (i = 0; i < 5;) {
//   console.log(i += 1);
// }

//You can also declare the variable outside of the loop, it is just makes it accesible globally.

//5. The following code uses a randomNumberBetween function to generate a number between its
//first and second arguments. It uses a while loop to try to generate a number greater than 2.
//Refactor the code so that you don't need to call randomNumberBetween from two different
//locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2) 

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');