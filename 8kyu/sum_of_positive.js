// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Solution 1
function positiveSum(arr) {
	let sum = []
 	for(let i = 0; i < arr.length; i++) {
   	if(arr[i] >= 0) {
    	sum[i] = arr[i]
    } else {
    	sum[i] = 0
    }
  }
    return sum.reduce((a,b) => a + b, 0)
}

// Solution 2
function positiveSum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum
  }

// Solution 3
function positiveSum (arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0)
}