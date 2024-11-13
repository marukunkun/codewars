// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
	let digits = ''

	for(let i = 0; i <= n; i++) {
  	    digits += i ** 2
    }
    return digits.split('').filter(e => e === String(d)).length
}

console.log(nbDig(5750, 0)) //  4700, "n = 5750, d = 0"
console.log(nbDig(11011, 2)) //  9481, "n = 11011, d = 2"
console.log(nbDig(12224, 8)) //  7733, "n = 12224, d = 8"
console.log(nbDig(11549, 1)) // 11905, "n = 11549, d = 1"