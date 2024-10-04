// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
    str = str.toLowerCase().split('')
return str.filter(e => e === 'x').length === str.filter(e => e === 'o').length
}

console.log(XO("ooxx")) // true
console.log(XO("xooxx")) // false
console.log(XO("ooxXm")) // true
console.log(XO("zpzpzpp")) // true 
console.log(XO("zzoo")) // false