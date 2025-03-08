// Complete the solution so that it returns the number of times the search_text is found within the full_text.
// Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1

// Solution 1
function solution(fullText, searchText) {
    const n = fullText.replaceAll(searchText, ',')
    let count = 0
    for(let i = 0; i < n.length; i++) {
        if(n[i] === ',') {
            count++
        }
    }
    return count
}

// Solution 2
function solution(fullText, searchText){
    return fullText.split(searchText).length - 1
}

console.log(solution('abcdeb','b')) // 2
console.log(solution('abc','b')) // 1
console.log(solution('abbc','bb')) // 1