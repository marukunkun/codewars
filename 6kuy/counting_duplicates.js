// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Solution 1
function duplicateCount(str) {
    str = str.toLowerCase().split('').filter((e, i) => str.indexOf(e) !== i)
    return str.filter((e,i) => str.indexOf(e) === i).length
}

// Solution 2
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    }).length
}

console.log(duplicateCount("abcde")) // 0 # no characters repeats more than once
console.log(duplicateCount("aabbcde")) // 2 # 'a' and 'b'
console.log(duplicateCount("aabBcde")) // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(duplicateCount("indivisibility")) // 1 # 'i' occurs six times
console.log(duplicateCount("Indivisibilities")) // 2 # 'i' occurs seven times and 's' occurs twice
console.log(duplicateCount("aA11")) // 2 # 'a' and '1'
console.log(duplicateCount("ABBA")) // 2 # 'A' and 'B' each occur twice