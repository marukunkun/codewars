// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation
// If an empty value (null) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// Solution 1
function sumArray(array) {
	if(array === null || array === undefined || array.length <= 1) {
  	return 0 
  } else {
    let min = array.indexOf(Math.min(...array))
   	array.splice(min, 1)
    
    let max = array.indexOf(Math.max(...array))
    array.splice(max,1)
		
    
    return array.reduce((acc, curr) => acc + curr, 0)
  }
}

// Solution 2
function sumArray(array) {
	if(array === null || array === undefined || array.length <= 1) {
  	return 0 
  } else {
    array.sort((a,b) => a - b)
    array.pop()
    array.shift()
    return array.reduce((acc,curr) => acc + curr, 0)
  }
}


console.log(sumArray(null)) //0 
console.log(sumArray([ ])) //0 
console.log(sumArray([ 3 ])) //0 
console.log(sumArray([ 3, 5 ])) //0 
console.log(sumArray([ 6, 2, 1, 8, 10 ])) //16 
console.log(sumArray([ 0, 1, 6, 10, 10 ])) //17 
console.log(sumArray([ -6, -20, -1, -10, -12 ])) //-28 
console.log(sumArray([ -6, 20, -1, 10, -12 ])) // 3 