// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

function toBinary(n){
    return +n.toString(2)
}

console.log(toBinary(1)) // 1
console.log(toBinary(2)) // 10
console.log(toBinary(3)) // 11
console.log(toBinary(5)) // 101