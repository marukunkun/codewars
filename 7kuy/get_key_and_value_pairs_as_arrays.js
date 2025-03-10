// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// This kata only tests for data that uses object literal notation (simple objects).
// For extra style, can you get your method to check for objects that extend their prototype?

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)]
}

console.log(keysAndValues({a: 1, b: 2, c: 3})) // [['a', 'b', 'c'], [1, 2, 3]]
console.log(keysAndValues({})) // [[], []]
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'})) // [['1', '2', '3'], ['a', 'b', 'c']]