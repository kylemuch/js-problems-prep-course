//1. Given the following code, how can you access the name of the person?

// let person = {
//   name: 'Bob',
//   occupation: 'web developer',
//   hobbies: 'painting',
// };

//  person.name
//  person['name']

//  let myString = 'name'
//  person[myString]

//2. Which of the following values are valid keys for an object ?

// 1 //invalid
// '1' //valid
// undefined //invalid
// 'hello world' //valid
// true //invalid
// 'true' //valid
//WRONGO they are all valid, JS will convert them all to strings though. ALL OBJECT KEYS ARE strings

// 3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that
// behaves as an array in a for statement. The object should contain at least 3 elements.
// You should place your code between the braces in the let statement:

// let myArray = {
//   0 : 'kyle',
//   1 : 'keenan',
//   2 : 'much'
// };

// myArray.length = 3

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

//4. Create an array from the keys of the object obj below, with all values converted to uppercase. Your implementation must not mutate obj.

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let keyArr = Object.keys(obj)

// keyArr.forEach((key, index) => keyArr[index] = key.toUpperCase())

// console.log(keyArr)

//5. Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3

//6. Add a qux property with value 3 to the myObj object we created in the previous exercise.
//Now, examine the following code snippets:

// Object.keys(myObj).forEach(function (key) {
//   console.log(key);
// });
// // Object.keys() returns an array of ONLY THE KEYS ON THE OBJECT not on it's prototype.
// for (let key in myObj) {
//   console.log(key);
// }
// // for/in loops iterate over the objects keys and the keys of the objects prototypes.
// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//we can use hasOwnProperty to test whether the object has the property though if we want
// to use for/in.

// let objToCopy = {
//   foo: 1,
//   bar: 2
// }

// let objectCopier = (obj, keys) => {
//   let objectCopy = {}

//   if (!keys) {
//     objectCopy = Object.assign({}, obj)
//   } else {

//     keys.forEach(key =>  objectCopy[key] = obj[key])
//     console.log(objectCopy);
//   }

//   return objectCopy;
// }

// console.log(objectCopier(objToCopy));

//8. What does the following program log to the console ? Why ?

  let foo = {
    a: 'hello',
    b: 'world',
  };

let qux = 'hello';

function bar(argument1, argument2) {
  console.log(argument1) //argument1 is the object literal foo refers to, we can change that
  console.log(argument2) //argument2 is the string literal 'hello' this is a primitive and cannot
  //be reassigned. argument2 = 'hi' is essentially saying 'hello' = 'hi'
  argument1 = 'fuck';
  //argument1 is an expression that resolve to an object, which is a mutable value.
  argument2 = 'hi';
  //argument2 is an expression that resolves to a string which cannot be modified.
}
bar(foo, qux);

console.log(foo.a);
console.log(qux);

//pass by value types cannot be modified by reassignment within a function if they are used as an
//argument the function just references the value it represents.
//pass by reference types can be modified within a function if used as an argument and referenced
//with the argument, but they cannot be reassigned.