// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    str = [...str]
    str.length % 2 === 0 ? str : str.push('_')

    let sep = '' 
    str.map((e,i,arr) => [i+1] % 2 === 0 ? sep += e + ' ' : sep += e)

    return sep === "" ? [] : sep.trim().split(' ')
}

console.log(solution("abcdef")) // ["ab", "cd", "ef"]
console.log(solution("abcdefg")) // ["ab", "cd", "ef", "g_"]
console.log(solution("")) // []