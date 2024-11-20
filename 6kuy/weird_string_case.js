// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words.
// Words will be separated by a single space(' ').

function toWeirdCase(string) {
  let str = string.toLowerCase().split(' ')
  let result = []
  
  for(let i = 0; i < str.length; i++) {
  	let container = ''
  	for(let j = 0; j < str[i].length; j++) {
  		if(j % 2 === 0) {
      	    container += str[i][j].toUpperCase()
        } else {
      	    container += str[i][j]
        }
    }
    result.push(container)
  }
  return result.join(' ')
}

console.log(toWeirdCase('This is a test')) // 'ThIs Is A TeSt'
console.log(toWeirdCase('')) // ''
console.log(toWeirdCase('unique')) // 'UnIqUe'
console.log(toWeirdCase('UPPER CASE')) // 'UpPeR CaSe'
console.log(toWeirdCase('lower case')) // 'LoWeR CaSe' 