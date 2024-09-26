// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// Solution 1
function squareSum(numbers){
	return numbers.reduce((acc, curr) => acc + curr ** 2, 0)
}

// Solution 2
function squareSum(numbers) {
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0)
}