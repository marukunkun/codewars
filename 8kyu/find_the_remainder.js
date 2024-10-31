// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Solution 1
function remainder(n, m){
  const min = Math.min(...[n, m])
  const max = Math.max(...[n, m])
  
  return max % min
}

// Solution 2
function remainder(a, b){
    return a > b ? a % b : b % a
}

console.log(remainder(17, 5)) // 2
console.log(remainder(13, 72)) // 7
console.log(remainder(1, 0)) // NaN
console.log(remainder(0, 0)) // NaN