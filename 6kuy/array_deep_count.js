// You are given an array.
// Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// The input will always be an array.

// declare a counter = 0
// if array includes an array
// check is length

function deepCount(a) {
    let count = a.length
  
    for(let i = 0; i < a.length; i++) {
  	    if(Array.isArray(a[i])) {
    	    count += deepCount(a[i])
        }
    }
    return count
}

console.log(deepCount([])) //  0
console.log(deepCount([1, 2, 3])) //  3
console.log(deepCount(["x", "y", ["z"]])) //  4
console.log(deepCount([1, 2, [3, 4, [5]]])) //  7
console.log(deepCount([[[[[[[[[]]]]]]]]])) //  8