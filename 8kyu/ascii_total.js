// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.

// Solution 1
function uniTotal(str) {
	let total = str.split('').map(e => e.charCodeAt())
    return total.reduce((a,b) => a + b, 0)
}

// Solution 2
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0)

console.log(uniTotal("a")) // 97
console.log(uniTotal("aaa")) // 291