// There is an array of strings. 
// All strings contains similar letters except one. 
// Try to find it!

// Strings may contain spaces. 
// Spaces are not significant, only non-spaces symbols matters. 
// E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
    const normalized = arr.map(str => [...new Set(str.replace(/\s+/g, '').toLowerCase())].sort().join(''))
    
    const count = {}
    normalized.forEach(str => {
      count[str] = (count[str] || 0) + 1
    })
    
    const uniqueNormalized = Object.keys(count).find(e => count[e] === 1)

    return arr[normalized.indexOf(uniqueNormalized)]
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) // 'foo'
console.log(findUniq([ 'silvia', 'vasili', 'victor' ])) //  'victor'
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])) // 'Harry Potter'
console.log(findUniq([ '    ', 'a', ' ' ])) // 'a' */