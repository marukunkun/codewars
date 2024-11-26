// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

function explode(s) {
	s = s.split('') 
    return s.map(e => e.repeat(e)).join('')
}

console.log(explode("312")) // , "333122"
console.log(explode("102269")) // "12222666666999999999"
console.log(explode("0")) // ""
console.log(explode("000")) // ""
console.log(explode("123")) // "122333"