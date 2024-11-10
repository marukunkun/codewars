// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Solution 1 (too complicate but works)
const isAnagram = function(test, original) {
	original = original.split('').map(e => e.toLowerCase())
    test = test.split('').map(e => e.toLowerCase())
  
	const counterOriginal = {}
    const counterTest = {}
  
	original.forEach(e => counterOriginal[e] ? counterOriginal[e] += 1 : counterOriginal[e] = 1)
    test.forEach(e => counterTest[e] ? counterTest[e] += 1 : counterTest[e] = 1)
  
    if (Object.keys(counterOriginal).length !== Object.keys(counterTest).length) {
        return false
    }
  
    for (let char in counterOriginal) {
        if (counterOriginal[char] !== counterTest[char]) {
            return false
        }
    }
  
    return true
}

// Solution 2
function isAnagram(test, original) {
    const t = test.toLowerCase().split('').sort().join('');
    const o = original.toLowerCase().split('').sort().join('');
    return (t === o) ? true:false
}

console.log(isAnagram("foefet", "toffee")) // true
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true
console.log(isAnagram("dumble", "bumble")) // false
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false */