//1. What values do the following expressions evaluate to ?

// false || (true && false); //false
// true || (1 + 2);  // true
// (1 + 2) || true;  // 3
// true && (1 + 2);  // 3
// false && (1 + 2); // false
// (1 + 2) && true;  // true
// (32 * 4) >= 129;  // false
// false !== !true;  // false
// true === 4;       // false
// false === (847 === '847');  // true
// false === (847 == '847');   // false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //true
// false OR false OR true OR false

//4. What does the following code log to the console, and why?

// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }

// barCodeScanner('113');
//There is no break statement so it's going to log 'Product2' and then 'Product not found!'
// WRONGO
//The switch statement will execute all the code after the case statement evaluates to true,
// Product2 Product3 and Product not found! will all be logged since we did not insert a break .

//5. Refactor this statement to use an if statement instead.

// return foo() ? 'bar' : qux();

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

//6. What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty({});

// this will evaluate to 'Empty' because an empty array is a falsey value
// WRONGO
// an empty array and an empty object are both truthy values. The falsey values are:
// false, undefined, NaN, 0, -0, "", Null
// ![] returns false, !{} returns false. !![] returns true, !!{} returns true