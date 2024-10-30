// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. 
// Only the ending ones.

// Zero alone is fine, don't worry about it. Poor guy anyway :(

// Solution 1
function noBoringZeros(n) {
    n = String(n).split('')
    for(let i = n.length; i >= 0; i--) {
        if(n[i-1] !== '0') {
          return +n.slice(0, i).join('')
        }
    }
}

// Solution 2
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
}

console.log(noBoringZeros(1450)) // 145
console.log(noBoringZeros(960000)) // 96
console.log(noBoringZeros(1050)) // 105
console.log(noBoringZeros(-1050)) // -105
console.log(noBoringZeros(-105)) // -105
console.log(noBoringZeros(1)) // -105
console.log(noBoringZeros(0)) //  0