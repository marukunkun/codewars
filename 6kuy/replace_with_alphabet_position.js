// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Solution 1
let alphabet = 'abcdefghijklmnopqrstuvwxyz'

function alphabetPosition(text) {
	let replace = ''
	text = text.toLowerCase()
  for(let i = 0; i < text.length; i++) {
  	if(alphabet.includes(text[i])) {
    	replace += alphabet.indexOf(text[i]) + 1 + ' '
    }
  }
  return replace.trim()
}

// Solution 2
function alphabetPosition(text) {
    return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")) // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"