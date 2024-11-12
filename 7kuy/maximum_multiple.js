// Given a Divisor and a Bound, find the largest integer N, such that,

// Conditions :
	// N is divisible by divisor
	// N is less than or equal to bound
	// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values.
// It's guaranteed that a divisor is found.

function maxMultiple(divisor, bound) {
	let result = bound
    while (result % divisor !== 0) {
  	    result--
    }
    return result
}

console.log(maxMultiple(2, 7)) // 6
console.log(maxMultiple(3, 10)) // 9
console.log(maxMultiple(7, 17)) // 14
console.log(maxMultiple(10, 50)) // 50
console.log(maxMultiple(37, 200)) // 185
console.log(maxMultiple(7, 100)) // 98