// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
// Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. 
// The highest is 26.

// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
	s = s.replaceAll('a', ' ')
  		 .replaceAll('e', ' ')
         .replaceAll('i', ' ')
         .replaceAll('o', ' ')
         .replaceAll('u', ' ')
         .split(' ').filter(e => e !== '')
    
	let count = []
    
	for(let i = 0; i < s.length; i++) {
  	    let subcount = 0
  	    for(let j = 0; j < s[i].length; j++) {
    	    subcount += s[i][j].charCodeAt() - 96
        }
        count.push(subcount)
    }
  
    return Math.max(...count)
}

console.log(solve("zodiac")) // 26
console.log(solve("chruschtschov")) // 80
console.log(solve("khrushchev")) // 38
console.log(solve("strength")) // 57
console.log(solve("catchphrase")) // 73
console.log(solve("twelfthstreet")) // 103
console.log(solve("mischtschenkoana")) // 80
console.log(solve("az")) // 26