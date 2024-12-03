// Complete the solution so that it takes the object passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE".
// Each key/value pair should be separated by a comma except for the last pair.

function solution(pairs) {
	return String(Object.entries(pairs).map(e => `${e[0]} = ${e[1]}`))
}

console.log(solution({'a': 1, 'b': 2})) // 'a = 1,b = 2'
console.log(solution({'a': 'b', 'b': 'a'})) // 'a = b,b = a'
console.log(solution({0: 'a', 'b': 2})) // '0 = a,b = 2'
console.log(solution({'b': 1, 'c': 2, 'e': 3})) // 'b = 1,c = 2,e = 3'
console.log(solution({})) // ''