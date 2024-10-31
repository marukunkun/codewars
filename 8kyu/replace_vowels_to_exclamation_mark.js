// Replace all vowel to exclamation mark in the sentence. 
// aeiouAEIOU is vowel.

// Solution 1
function replace(str) {
    const vowels = 'aeiouAEIOU'
    let marks = ''

	for(let i = 0; i < str.length; i++) {
  	if(vowels.includes(str[i])) {
    	marks += '!'
    } else {
    	marks += str[i]
    }
  }
  return marks
}

// Solution 2
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('')

console.log(replace("Hi!")) // "H!!"
console.log(replace("!Hi! Hi!")) // "!H!! H!!"
console.log(replace("aeiou")) // "!!!!!"
console.log(replace("ABCDE")) // "!BCD!"