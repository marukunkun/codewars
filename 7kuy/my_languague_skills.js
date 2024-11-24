// You are given a dictionary/hash/object containing some languages and your test results in the given languages.
// Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
	results = Object.entries(results).filter(e => e[1] >= 60).sort((a,b) => b[1] - a[1])
    return results.map(e => e[0])
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) // ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71})) // ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})) // []