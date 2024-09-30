// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. 
// Do not mutate the input array.

// Solution 1
function invert(array) {
   let result = []
   for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
    	    result.push(Math.abs(array[i]))
        } else {
    	    result.push(array[i] * -1)
        }
   }
   return result
}

// Solution 2
function invert(array) {
    return array.map(el => -el)
}