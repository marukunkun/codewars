// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Note you should only return a number, the count of divisors.
// The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// Solution 1 (works but it's too slow for bigger number)
function getDivisorsCnt(n){
    let divisor = 0
for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
      divisor++
  }
}
return divisor
}

// Solution 2
function getDivisorsCnt(n) {
  let divisorCount = 0

  // loop from 1 to the square root of n
    // Because any divisor larger than the square root would already have been pair with smaller divisors
    // So we don't need to check beyond the square root
  for (let i = 1; i <= Math.sqrt(n); i++) {

    // check if i divised by n without leaving a remainder
    if (n % i === 0) {

        // increment by 1 if true
        divisorCount++;

        // check n / i is also a divisor
        if (i !== n / i) {
           divisorCount++
        }
    }
  }
  return divisorCount
}

console.log(getDivisorsCnt(1)) //  1
console.log(getDivisorsCnt(10)) // 4
console.log(getDivisorsCnt(11)) // 2
console.log(getDivisorsCnt(54)) // 8