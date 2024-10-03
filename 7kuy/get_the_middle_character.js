// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// #Output
// The middle character(s) of the word represented as a string.

function getMiddle(s) {
	if(s.length % 2 === 0) {
  	return s.slice(s.length/2 - 1, s.length / 2 + 1)
  } else {
  	return s.slice(s.length/2, s.length/2 + 1)
  }
}

console.log(getMiddle("test")) //  "es"
console.log(getMiddle("testing")) // "t"
console.log(getMiddle("middle")) // "dd"
console.log(getMiddle("A")) // "A"
