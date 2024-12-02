// Consider the word "abode". 
// We can see that the letter a is in position 1 and b is in position 2.
//  In the alphabet, a and b are also in positions 1 and 2.
//  Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Solution 1
function solve(arr) {
	arr = arr.map(e => e.toLowerCase())
  
	let result = []
  
	for(let i = 0; i < arr.length; i++) {
  	    let count = 0
  	    for(let j = 0; j < arr[i].length; j++) {
    	    if(j+1 === arr[i][j].charCodeAt() - 96) {
      	    count++
        }
    }
    result.push(count)
  }
  return result
}

// Solution 2
function solve(arr){  
	const alphabeth = "abcdefghijklmnopqrstuvwxyz"
	return arr.map(x => x.toLowerCase().split('').filter((y,i) => i === alphabeth.indexOf(y)).length)
}

console.log(solve(["abode","ABc","xyzD"])) // [4,3,1]
console.log(solve(["abide","ABc","xyz"])) // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])) // [6, 5, 7]
console.log(solve(["encode","abc","xyzD","ABmD"])) // [1, 3, 1, 3]