// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. 
// For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.


function orderedCount(string) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        let found = result.find(([e]) => e === string[i])
        if (found) {
            found[1]++
        } else {
            result.push([string[i], 1])
        }
    }
    return result
}

console.log(orderedCount("abracadabra")) // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]])
console.log(orderedCount("Code Wars")) //  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]]
console.log(orderedCount("233312")) // [['2', 2], ['3', 3], ['1', 1 ]]]s