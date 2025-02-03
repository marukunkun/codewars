// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(str, separator) {
	return str.split(' ').map(e => e.split('').join(separator)).join(' ')
}

console.log(splitAndMerge("My name is John", " ")) // "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-")) // "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", ".")) // "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ",")) // "H,e,l,l,o W,o,r,l,d,!"