// This kata is designed to test your ability to extend the functionality of built-in classes.
// In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!

numbers = [1, 2, 3, 4, 5]

Array.prototype.square = function() {
	return this.map(e => e*e)
}

Array.prototype.cube = function() {
	return this.map(e => e**3)
}

Array.prototype.sum = function() {
	return this.reduce((acc, curr) => acc + curr, 0)
}

Array.prototype.average = function() {
	return this.reduce((acc, curr) => acc + curr, 0) / this.length
}

Array.prototype.even = function() {
	return this.filter(e => e % 2 === 0)
}

Array.prototype.odd = function() {
	return this.filter(e => e % 2 !== 0)
}

console.log(numbers.square()) //  [1, 4, 9, 16, 25]
console.log(numbers.cube()) // [1, 8, 27, 64, 125]
console.log(numbers.sum()) // 15
console.log(numbers.average()) // 3
console.log(numbers.even()) // [2, 4]
console.log(numbers.odd()) // [1, 3, 5]