// Given a non-empty array of integers, return the result of multiplying the values together in order. 

// Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => x.reduce((a, b) => a * b) 
// we don't add the initial value 0 at the end because we are using multiplication