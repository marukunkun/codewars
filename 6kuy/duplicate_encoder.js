// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Notes
// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// ( once
// ) twice

// Solution 1
function duplicateEncode(word){
    word = word.toLowerCase()
    let convertion = ''
    let count = {}

    for(let i = 0; i < word.length; i++) {
        count.hasOwnProperty(word[i]) ? count[word[i]] += 1 : count[word[i]] = 1
    }

    for(let i = 0; i < word.length; i++) {
        count[word[i]] === 1 ? convertion += '(' : convertion += ')'
    }

    return convertion
}

// Solution 2
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('')
}

console.log(duplicateEncode("din")) // "((("
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success") ) // ")())())"
console.log(duplicateEncode("(( @")) //"))(("