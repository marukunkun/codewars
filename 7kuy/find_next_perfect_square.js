// ou might know some pretty large perfect squares. 
// But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language.
// You may assume the argument is non-negative.

function findNextSquare(sq) {  
	const square = Math.sqrt(sq)
  return Number.isInteger(square) ? Math.pow(square + 1, 2) : -1
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(625)) // 676
console.log(findNextSquare(114)) // -1