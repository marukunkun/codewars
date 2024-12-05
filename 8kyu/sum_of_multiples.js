// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n, m) {
	if(m < n || m === n) {
  	    return 'INVALID'
    } else {
  	    let add = 0
        let result = []
  	    while(add < m - n) {
            add += n
            result.push(add)
        }
        return result.reduce((acc, curr) => acc + curr, 0)
    }
}

console.log(sumMul(2, 9)) // 2 + 4 + 6 + 8 = 20
console.log(sumMul(3, 13))  // 3 + 6 + 9 + 12 = 30
console.log(sumMul(4, 123)) // 4 + 8 + 12 + ... = 1860
console.log(sumMul(4, -7))  // "INVALID"