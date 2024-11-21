// Oh, no! The number has been mixed up with the text.
// Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Your task is to return a number from a string.

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

function filterString(value) {
  return +value.split('').filter(e => !isNaN(parseInt(e))).join('')
}

console.log(filterString("123")) // 123
console.log(filterString("a1b2c3")) // 123
console.log(filterString("aa1bb2cc3dd")) // 123