// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
    const lengths = (arrayOfArrays || [])
      .map(a => a ? a.length : 0)
      .sort((a, b) => a - b)
    
    if (lengths.includes(0)) {
      return 0
    }
  
    for (let i = 0; i < lengths.length - 1; i++) {
      if (lengths[i] + 1 !== lengths[i + 1]) {
        return lengths[i] + 1
      }
    }
  
    return 0
  }
  
console.log(getLengthOfMissingArray([[2], [0, 1, 2], [1, 3, 0, 3], [], [0, 0], [2, 3, 4, 3, 4, 4], [1, 4, 3, 4, 2, 1, 0]])) // 0
console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 3
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 2
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )) // 2
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )) // 5    
console.log(getLengthOfMissingArray([ ])) // 0