// You must implement a function that returns the difference between the largest and the smallest value in a given list received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted


function maxDiff(list) {
    const min = Math.min(...list)
    const max = Math.max(...list)

    return list.length > 0 ? max - min : 0
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])) // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])) // 11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])) // 16
console.log(maxDiff([16])) // 0
console.log(maxDiff([])) // 0