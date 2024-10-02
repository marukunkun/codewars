// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Solution 1
function getCount(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
 
  for(let i = 0; i < str.length; i++) {
  	if(vowels.includes(str[i])) {
    	count++
    }
  }
  return count
}

console.log(getCount("abracadabra")) // 5

// Solution 2
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length
}