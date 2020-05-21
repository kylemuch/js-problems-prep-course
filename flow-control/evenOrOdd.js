let evenOrOdd = int => {
  if (Number.isInteger(int)) {
    return int % 2 == 0 ? 'even' : 'odd'
  } else {
    console.log("Error, that's not an integer")
  }
}

console.log(evenOrOdd(0))