// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
}

console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])) // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])) // 5
console.log(binaryArrayToNumber([1, 0, 0, 1])) // 9
console.log(binaryArrayToNumber([0, 0, 1, 0])) // 2
console.log(binaryArrayToNumber([0, 1, 1, 0])) // 6
console.log(binaryArrayToNumber([1, 1, 1, 1])) // 15
console.log(binaryArrayToNumber([1, 0, 1, 1])) // 11
