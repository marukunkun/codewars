// Input:
// a string
// an array of strings

// Output of function containAllRots(str, arr):
// a boolean true if all rotations of string are included in arr
// false otherwise

// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of string === ""
// and for any array arr: containAllRots("", arr) --> true

function containAllRots(str, arr) {
    for(let i = 0; i < str.length; i++) {
        console.log(str.slice(i) + str.slice(0, i))
        if(arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
            return false
        }
    }
    return true
}

console.log(containAllRots("", [])) // true
console.log(containAllRots("", ["bsjq", "qbsj"])) // true
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])) // true
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]),) //false