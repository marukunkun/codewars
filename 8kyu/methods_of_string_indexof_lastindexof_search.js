// Coding in function firstToLast, function accept 2 parameters:str and c.
// str is a string. 
// c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; 
// If there is only one c in str, should return 0; 
// If there is no c in the str, should return -1. 
// Retrieval should not ignored the case.

function firstToLast(str, c) {
    if(!str.includes(c)) {
  	    return -1
    } else {
  	    const first = str.indexOf(c)
        const last = str.lastIndexOf(c)
        return Math.abs(first - last)
    }
}

console.log(firstToLast("ababc","a")) // (2-0) 2
console.log(firstToLast("ababc","c")) // (4-4) 0
console.log(firstToLast("ababc","d")) // -1