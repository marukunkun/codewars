// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// % 5 === 0 return 
// else {while (e % 5 !== 0 { e++ } return e}

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// Solution 1
function roundToNext5(n){
    if(n % 5 === 0) {
        return n
    } else {
        while (n % 5 !== 0) {
          n++
      }
      return n
    }
}

// Solution 2
function roundToNext5(n){
    while(n % 5 !== 0) n++
    return n
}

console.log(roundToNext5(0)) // 0
console.log(roundToNext5(1)) // 5
console.log(roundToNext5(-1)) // 0
console.log(roundToNext5(-5)) // -5
console.log(roundToNext5(3)) // 5
console.log(roundToNext5(5)) // 5
console.log(roundToNext5(7)) // 10
console.log(roundToNext5(20)) // 20
console.log(roundToNext5(39)) // 40
console.log(roundToNext5(990)) // 990
console.log(roundToNext5(121)) //125 
console.log(roundToNext5(555)) // 555