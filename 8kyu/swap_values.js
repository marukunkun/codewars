// I would like to be able to pass an array with two elements to my swapValues function to swap the values.
// However it appears that the values aren't changing.

// Can you figure out what's wrong here?

/* 
function swapValues() {
    var args = Array.prototype.slice.call(arguments)
    var temp = args[0]
    args[0] = args[1]
    args[1] = temp
}
*/

// Solution 1
function swapValues() {
    let args = Array.prototype.slice.call(arguments)
    let temp = args[0][0]
    args[0][0] = args[0][1]
    args[0][1] = temp
}

// Solution 2
function swapValues() {
    return arguments[0].reverse()
}

let arr = [1,2]
swapValues(arr)
console.log(arr[0]) // 2
console.log(arr[1]) // 1