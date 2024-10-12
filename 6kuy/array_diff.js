// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:

// Solution 1
function arrayDiff(arr1, arr2) {
	let uniq = []
	for(let i = 0; i < arr1.length; i++) {
  	if(!arr2.includes(arr1[i])) {
    	uniq.push(arr1[i])
    }
  }
  return uniq
}

// Solution 2
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1,2],[1])) // [2]
console.log(arrayDiff([1,2,2,2,3],[2])) //  [1,3]