// This time no story, no theory. 
// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution 1
function accum(s) {
	// separate letters
  s = s.split('').map(e => e.toLowerCase())
  // for loop and repeat n time the index the letter
  for(let i = 0; i < s.length; i++) {
    s[i] = s[i].repeat(i+1)
  }
  // map througth and add UpperCase()
  // join() array with '-'
  return s.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('-')
}

// Solution 2
function accum(s) {
	return s.split('')
            .map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i)))
            .join('-')
}

console.log(accum("ZpglnRxqenU"))