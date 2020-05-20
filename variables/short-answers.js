//3
{
  let foo = 'bar';
}

console.log(foo)
// will return a ReferenceError, the curly brackets create a scope and the
// print statement has no access to foo


//4
// You'll get an error since you are attemtpting to reassign
// the value of a constant.

//5
// the log statement prints 'bar', the second foo is in it's own
// scope and the log references foo in the same scope as it.

//6
// there is no error, the constant in the curly brackets can be
// succesfully intialized because the {} create a new scope
// so there is no collision with the FOO on line 1

