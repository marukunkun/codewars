// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.
// If the 3rd letter is a vowel, return the first 4 letters.
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:
// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

function nicknameGenerator(name) {
	const vowels = 'aeiou'
    
	if(name.length < 4) {
    	return "Error: Name too short"
    } else if (vowels.includes(name[2])) {
    	return name[0].toUpperCase() + name.slice(1, 4)
    } else {
    	return name[0].toUpperCase() + name.slice(1, 3)
    }
} 

console.log(nicknameGenerator("Jimmy")) // "Jim"
console.log(nicknameGenerator("Samantha")) // "Sam"
console.log(nicknameGenerator("Sam")) // "Error: Name too short"
console.log(nicknameGenerator("Kayne")) // "Kay"
console.log(nicknameGenerator("Jeannie")) // "Jean"
console.log(nicknameGenerator("Douglas")) // "Doug"
console.log(nicknameGenerator("Gregory")) // "Greg"