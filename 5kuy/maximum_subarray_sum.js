// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.
// Note that the empty list or array is also a valid sublist/subarray.


// Solution 1 (brute force but apparently there is a solution with Kadane Algorithm)
let maxSequence = function(arr) {
	let positiveN = arr.reduce((a,c) => a + c, 0)
	const list = []
    
	for(let i = 0; i < arr.length; i++) {
	    for(let j = 0; j < arr.length; j++) {
			list.push(arr.slice(i, j+1).reduce((a,c) => a + c, 0))
            list.push(arr.reverse().slice(i, j+1).reduce((a,c) => a + c, 0))
		}
	}
  
	return arr.every(e => e >= 0) ? positiveN :
  	       arr.every(e => e < 0) ? 0 :
    	   Math.max(...list)
} 

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSequence([])) // 0
console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43])) // 155