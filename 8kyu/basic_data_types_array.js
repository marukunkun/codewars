// I've written five functions.
// Each function receives a parameter arr which is an array.
// Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr

function getLength(arr){
    return arr.length
}
function getFirst(arr){
    return arr.shift()
}
function getLast(arr){
    return arr.pop()
}
function pushElement(arr){
    const el = 1
    arr.push(el)
    return arr
}
function popElement(arr){
    arr.pop()
    return arr
}

console.log(getLength([1,2,3])) // 3
console.log(getFirst([1,2,3])) // 1
console.log(getLast([1,2,3])) // 3
console.log(pushElement([1,2,3]).length) // 4
console.log(popElement([1,2,3]).length) // 2