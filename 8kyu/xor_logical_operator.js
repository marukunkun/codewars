// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata).
// The exclusive or evaluates two booleans. 
// It then returns true if exactly one of the two expressions are true, false otherwise.

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

function xor(a, b) {
	return a != b
}

console.log(xor(false, false)) // false
console.log(xor(true, false)) // true
console.log(xor(false, true)) // true
console.log(xor(true, true)) // false
console.log(xor(true, true)) // true
