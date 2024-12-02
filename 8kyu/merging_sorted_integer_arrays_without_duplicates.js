// Write a function that merges two sorted arrays into a single one. 
// The arrays only contain integers.
// Also, the final outcome must be sorted and not have any duplicate.

// Solution 1
function mergeArrays(arr1, arr2) {
	return arr1.concat(arr2).filter((e,i,arr) => arr.indexOf(e) === i).sort((a,b) => a - b)
}

// Solution 2
function mergeArrays(a, b) {
	return [...new Set(a.concat(b))].sort((a,b) => a - b)
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) //  [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])) //  [2, 4, 6, 8]