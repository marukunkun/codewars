// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0.
// If end is not the result of an integer number of steps, then don't add it to the sum.
// See the 4th example below.

const sequenceSum = (begin, end, step) => {
	let result = []
  
    while(begin <= end) {
  	    result.push(begin)
  	    begin += step
    }
    
    return result.reduce((a,c) => a + c, 0)
}

console.log(sequenceSum(2, 6, 2)) // 12
console.log(sequenceSum(1, 5, 1)) // 15
console.log(sequenceSum(1, 5, 3)) // 5
console.log(sequenceSum(2, 2, 2)) // 2
console.log(sequenceSum(5, 2, 2)) // 0