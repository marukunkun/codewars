// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
	number = String(Math.abs(number)).split('').map(e => +e)
    return number.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumDigits(10)) // 1
console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) // 5
