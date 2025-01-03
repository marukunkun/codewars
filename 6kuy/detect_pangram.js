// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(string){
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    string = string.toLowerCase()
  				   .split('')
                   .filter((e, i, arr) => arr.indexOf(e) === i && alphabet.includes(e))
                   .sort()
                   .join('')
                 
    return string === alphabet
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("This is not a pangram.")) // false
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")) // true