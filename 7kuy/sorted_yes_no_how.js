// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
	const ascending = array.slice().sort((a,b) => a - b)
    const descending = array.slice().sort((a,b) => b - a)
  
    return array.toString() === ascending.toString() ? 'yes, ascending' : 
         array.toString() === descending.toString() ? 'yes, descending' :
         'no'
}

console.log(isSortedAndHow([1, 2])) // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])) // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])) // 'no'