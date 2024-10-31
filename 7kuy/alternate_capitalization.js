// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
	s = s.toLowerCase().split('')
    const odd = s.map((e,i) => i % 2 === 0 ? e : e.toUpperCase()).join('')
    const even = s.map((e,i) => i % 2 !== 0 ? e : e.toUpperCase()).join('')
    return [even, odd]
}

console.log(capitalize("abcdef")) // ['AbCdEf', 'aBcDeF']
console.log(capitalize("abracadabra")) // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors")) // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']