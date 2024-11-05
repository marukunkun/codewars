// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// return the index

// Solution 1 (seem to work but it's not recognize a good answer in codewars)
function gimme(triplet) {
    let middleN = triplet.toSorted((a,b) => a - b)[1]
    return triplet.indexOf(middleN)
  }
  
// Solution 2 
function gimme(triplet) {
  const order = triplet.slice() // create a shallow copy of a section of an array into a new array object
  const middle = triplet.sort((a,b) => a - b)[1] 
  return order.indexOf(middle)
}
  
console.log(gimme([2, 3, 1])) // 0
console.log(gimme([5, 10, 14])) // 1
console.log(gimme([2.1, 3.2, 1.4])) // 0
console.log(gimme([5.9, 10.4, 14.2])) // 1
console.log(gimme([-2, -3, -1])) // 0
console.log(gimme([-5, -10, -14])) // 1
console.log(gimme([-2, -3.2, 1])) // 0
console.log(gimme([-5.2, -10.6, 14])) // 0 