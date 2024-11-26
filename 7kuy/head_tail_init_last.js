// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 4

// Your job is to implement these functions in your given language. 
// Make sure it doesn't edit the array; that would cause problems!
// Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x

// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]) => 1
// tail([1,2,3,4,5]) => [2,3,4,5]

// Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation.
// There are 400 tests overall.
// No empty arrays will be given.

function head(arr) {
    return arr[0]
}

function tail(arr) {
	return arr.length < 2 ? [] : arr.slice(1)
}

function init(arr) {
	return arr.slice(0, -1)
}

function last(arr) {
	return +arr.slice(-1)
}

console.log(head([5,1])) // 5
console.log(tail([1])) // []
console.log(init([1,5,7,9])) // [1,5,7]
console.log(last([7,2])) //  2