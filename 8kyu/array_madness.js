// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
	return a.reduce((acc, curr) => acc + curr ** 2 , 0) > b.reduce((acc, curr) => acc + curr ** 3, 0)
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3])) // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3