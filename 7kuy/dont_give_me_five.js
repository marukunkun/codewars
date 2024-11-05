// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. 
// The start and the end number are both inclusive!

// The result may contain fives. ;-)
// The start number will always be smaller than the end number.
// Both numbers can be also negative!

function dontGiveMeFive(start, end) {
    let noFive = []
    for(let i = start; i <= end; i++) {
        noFive.push(i)
    }
    return noFive.map(e => String(e).split(''))
  					                .filter((e) => !e.includes('5')).length
}

console.log(dontGiveMeFive(1,9)) // 8
console.log(dontGiveMeFive(4,17)) // 12