// Write a function to get the first element(s) of a sequence.
// Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

function first(arr, seq = 1) {
	return arr.slice(0, seq)
}

const arr = ['a', 'b', 'c', 'd', 'e']
console.log(first(arr)) // ['a']
console.log(first(arr, 2)) // ['a', 'b']
console.log(first(arr, 3)) // ['a', 'b', 'c']
console.log(first(arr, 0)) // []