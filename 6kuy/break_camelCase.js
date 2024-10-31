// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
	let spacing = ''
    for(let i = 0; i < string.length; i++) {
  	    if(string[i] === string[i].toUpperCase()) {
    	    spacing += ' ' + string[i]
        } else {
        	spacing += string[i]
        }
    }
    return spacing
}

console.log(solution("")) // ""
console.log(solution("camelCasing")) // "camel Casing"
console.log(solution("camelCasingTest")) // "camel Casing Test"