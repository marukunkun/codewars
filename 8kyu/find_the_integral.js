// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.

function integrate(coefficient, exponent) {
	exponent += 1
    coefficient /= exponent
    return `${coefficient}x^${exponent}`
}

console.log(integrate(3,2)) // "1x^3"
console.log(integrate(12,5)) // "2x^6"
console.log(integrate(20,1)) // "10x^2"
console.log(integrate(40,3)) // "10x^4"
console.log(integrate(90,2)) // "30x^3"