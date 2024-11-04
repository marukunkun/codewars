// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// Solution 1
function solve(str) {
	str = str.split('')
	const lowerCase = str.filter(e => e === e.toUpperCase()).length
    const upperCase = str.filter(e => e === e.toLowerCase()).length
    return lowerCase > upperCase ? str.map(e => e.toUpperCase()).join('') : str.map(e => e.toLowerCase()).join('')
}

// Solution 2
function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}
console.log(solve("coDe")) // "code". 
console.log(solve("CODe")) // "CODE". 
console.log(solve("coDE")) // "code". 