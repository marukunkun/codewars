// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).

// Solution 1
function solution(a, b){
	const shot = [a, b].sort((a, b) => a.length - b.length)[0]
  const long = [a, b].sort((a, b) => a.length - b.length)[1]
  return shot + long + shot
}

// Solution 2
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

console.log(solution('45', '1')) // '1451'
console.log(solution('13', '200')) // '1320013'
console.log(solution('Soon', 'Me')) // 'MeSoonMe'
console.log(solution('U', 'False')) // 'UFalseU'
