// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// Solution 1
function consonantCount(str) {
    const cons = 'bcdfghjklmnpqrstvwxyz'
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(cons.includes(str[i].toLowerCase())) {
            count++
        }
    }
    return count
}

// Solution 2
function consonantCount(str) {
    return str.replace(/[^a-z]|[aeiou]/gi, '').length
}

console.log(consonantCount('')) // 0
console.log(consonantCount('aeiouAEIOU')) // 0
console.log(consonantCount('aaa')) // 0
console.log(consonantCount('bcdfghjklmnpqrstvwxyz',)) //21
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ',)) //42
console.log(consonantCount('y')) // 1
console.log(consonantCount('Y')) // 1
console.log(consonantCount('01234567890_')) // 0
console.log(consonantCount(' ^&$#')) // 0
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#',)) //42