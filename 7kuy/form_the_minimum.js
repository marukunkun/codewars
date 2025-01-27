// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Only positive integers in the range of 1 to 9 will be passed to the function.

function minValue(values) {
  return +values.filter((e, i) => values.indexOf(e) === i).sort().join('')
}

console.log(minValue([1, 3, 1])) // 13
console.log(minValue([5, 7, 5, 9, 7])) // 579
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7])) // 134679