// Remove all exclamation marks from the end of sentence.

function remove(str) {
	let position
    
	for(let i = str.length-1; i > 0; i--) {
  	    if(str[i] === '!') {
    	    position = i
        } else {
    	    break
        }
    }
    return str.slice(0, position)
}

console.log(remove("Hi!")) // "Hi"
console.log(remove("Hi!!!")) // "Hi"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("!Hi!")) // "!Hi"
console.log(remove("Hi! Hi!")) // "Hi! Hi"
console.log(remove("Hi")) // "Hi"