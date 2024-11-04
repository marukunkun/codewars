// Given a string str, reverse it and omit all non-alphabetic characters.
// [input] string str
// [output] a string

function reverseLetter(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'	
	return str.split('').filter(e => alphabet.includes(e)).reverse().join('')
}

console.log(reverseLetter("krishan")) // "nahsirk"
console.log(reverseLetter("ultr53o?n")) // "nortlu"
console.log(reverseLetter("ab23c")) // "cba"
console.log(reverseLetter("krish21an")) // "nahsirk"