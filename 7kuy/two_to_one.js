// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


function longest(a, b) {
	let uniq = a.concat(b).split('').sort()
	return uniq.filter((e, i) => uniq.indexOf(e) === i).join('')
}

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
console.log(longest(a, b)) // "abcdefklmopqwxy"