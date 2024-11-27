// Given an array of integers, Find the minimum sum which is obtained from summing each Two integers product.

// Notes
// Array will contain positives only.
// Array will always have even size

function minSum(arr) {
	arr = arr.sort((a,b) => a - b)
  
    let count = 0
    for(let i = 0; i < arr.length; i) {
  	    count += (arr.pop() * arr.shift())
    }
    return count
}

console.log(minSum([5,4,2,3])) // (22)   5*2 + 3*4 = 22
console.log(minSum([12,6,10,26,3,24])) // (342)  26*3 + 24*6 + 12*10 = 342
console.log(minSum([9,2,8,7,5,4,0,6])) // (74)   9*0 + 8*2 +7*4 +6*5 = 74