// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    return a.filter((e,i) => a.indexOf(e) === i)
}

console.log(distinct([1])) // [1]
console.log(distinct([1,2])) // [1,2]
console.log(distinct([1,1,2])) // [1,2]