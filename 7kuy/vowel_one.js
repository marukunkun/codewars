// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(str) {
	str = str.toLowerCase()
	const vowels = 'aeiou'
    let result = ''

    for(let i = 0; i < str.length; i++) {
    	if(vowels.includes(str[i])) {
      	    result += 1
        } else {
      	    result += 0
        }
    }
    return result
}

console.log(vowelOne("abceios")) // "1001110"
console.log(vowelOne("aeiou, abc")) // "1111100100"