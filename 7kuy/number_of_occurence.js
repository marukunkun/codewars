// Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object.

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
  	    return this.filter(e => e === element).length
    }
})

let arr = [0, 1, 2, 2, 3]
console.log(arr.slice().numberOfOccurrences(0)) // 1
console.log(arr.slice().numberOfOccurrences(4)) // 0
console.log(arr.slice().numberOfOccurrences(2)) // 2
console.log(arr.slice().numberOfOccurrences(3)) // 1