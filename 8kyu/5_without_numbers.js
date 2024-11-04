// Write a function that always returns 5

// Sounds easy right?
// Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Soluton 1
function unusualFive() {
    return 'Hello'.length
}

// Solution 2
function unusualFive() {
    return ''.charCodeAt()
}

console.log(unusualFive()) // 5