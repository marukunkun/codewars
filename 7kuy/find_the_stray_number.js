// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Solution 1
function stray(numbers) {
	let once = {}
    numbers.map(e => once[e] ? once[e] += 1 : once[e] = 1)
    for(let element in once) {
  	    if(once[element] === 1) {
    	    return +element
        }
    } 
}

// Solution 2
function stray(numbers) {
    return numbers.reduce((a, b) => a ^ b)
}

// Solution 3
function stray(numbers){
    for (let element in numbers){
       if (numbers.indexOf(numbers[element]) === numbers.lastIndexOf(numbers[element])) {
            return numbers[element]
        }
    }
}

// Solution 4
function stray(numbers){
    return numbers.find((e) => numbers.indexOf(e) === numbers.lastIndexOf(e))
}

console.log(stray([1, 1, 2])) // 2
console.log(stray([1, 2, 1])) // 2
console.log(stray([2, 1, 1])) // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) // 3