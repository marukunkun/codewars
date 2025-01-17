// Complete the function to find the count of the most frequent item of an array. 
// You can assume that input is an array of integers.
// For an empty array return 0

// The most frequent number in the array is -1 and it occurs 5 times.

function mostFrequentItemCount(collection) {
	let count = {}
  
    for(let i = 0; i < collection.length; i++) {
    	if(count[collection[i]]) {
          	count[collection[i]] += 1
        } else {
          	count[collection[i]] = 1
        }
    }
    return collection.length === 0 ? 0 : Math.max(...Object.values(count))
}

console.log(mostFrequentItemCount([3, -1, -1])) // 2
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])) // 5