// Write a function that will compare two values, one will be a number and one will be a string.
// Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challenge harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b) {
	return a == b
}

console.log(add('1', 1)) // true
console.log(add(1, '1')) // true
console.log(add(1, '0')) // false
console.log(add('11', 11)) // true
console.log(add(12, 12)) // true
console.log(add(120, '021')) // false