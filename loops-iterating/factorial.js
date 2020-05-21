// let factorial = int => {
//   let accumulator = 1;

//   for (var i = int; i > 1; i--) {
//       accumulator *= i;
//     }

//   return accumulator;
// }

// console.log(factorial(5))

let factorial = num => {

  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}


console.log(factorial(5))
// rF(3) // 3 * rF(2) // 2 * rF(1) // 1