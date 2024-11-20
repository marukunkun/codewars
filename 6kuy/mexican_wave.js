// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

 // 1.  The input string will always be lower case but maybe empty.
 // 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

 function wave(str) {
	let wave = []
	for(let i = 0; i < str.length; i++) {
  	let container = ''
  	for(let j = 0; j < str.length; j++) {
    	if(str[j] === ' ') {
      	container += ' '
      } else if(i === j) {
      	container += str.charAt(i).toUpperCase()
      } else {
      	container += str[j]
      }
    }
    wave.push(container)
  }
  return [...wave].filter( e => e.match(/[A-Z]/))
}

console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars"))
console.log(wave(""))
console.log(wave("two words"))
console.log(wave(" gap "))