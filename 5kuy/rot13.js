// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function rot13(message) {
	let ciphered = ''
  for(let i = 0; i < message.length; i++) {
  	let char = message[i]
  
		if(upperAlphabet.includes(char)) {
	  	let index = upperAlphabet.indexOf(char)
			ciphered += upperAlphabet[(index + 13) % 26]
	  } else if (alphabet.includes(char)) {
	  	let index = alphabet.indexOf(char)
	    ciphered += alphabet[(index + 13) % 26]
  	} else {
  		ciphered += char
  	}
  }
  return ciphered
}

console.log(rot13("test")) // "grfg"
console.log(rot13("Test")) // "Grfg"