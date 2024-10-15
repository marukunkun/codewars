// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
	x = x.toLowerCase()
  return x === x.split('').reverse().join('')
}

console.log(isPalindrome("a")) // true
console.log(isPalindrome("aba")) // true
console.log(isPalindrome("Abba")) // true
console.log(isPalindrome("hello")) // false