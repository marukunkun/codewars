// Write a function that finds the sum of all its arguments.

// Solution 1
function sum() {
	return Object.values(arguments).reduce((a,c) => a + c, 0)
}

// Solution 2
function sum() {
    let total = 0

    for(let e in arguments) {
        total += arguments[i]
    }

    return total
}

// Solution 3
function sum(...args) {
    return args.reduce((a,c) => a + c, 0)
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(8, 2)) // 10
console.log(sum(1, 2, 3, 4, 5)) // 15