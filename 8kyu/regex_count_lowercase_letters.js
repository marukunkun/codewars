// Your task is simply to count the total number of lowercase letters in a string.

// Solution 1
const lowercaseCount = str => str.replace(/[^a-z]/g, '').length

// Solution 2
function lowercaseCount(str) {
    str = str.split('')
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  
    return str.filter(e => lowercase.includes(e)).length
}

console.log(lowercaseCount("abc")) // 3
console.log(lowercaseCount("abcABC123")) // 3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")) // 3
console.log(lowercaseCount("")) // 0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")) // 0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")) // 26