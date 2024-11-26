// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
// Leave any incidence of c untouched.

function switcheroo(x) {
	return x.split('').map(e => e === 'a' ? 'b' : e === 'b' ? 'a' : 'c').join('')
}

console.log(switcheroo('abc')) // 'bac'
console.log(switcheroo('aaabcccbaaa')) // 'bbbacccabbb'
console.log(switcheroo('ccccc')) // 'ccccc'