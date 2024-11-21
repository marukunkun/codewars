// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

function dashatize(num) {
	num = String(Math.abs(num)).split('')
    let result = ''
  
    for(let i = 0; i < num.length; i++) {
  	    if(num[i] % 2 !== 0 && result[result.length -1] !== '-') {
    	    result += '-' + num[i] + '-'
  	    } else if(num[i] % 2 !== 0) {
    	    result += num[i] + '-'
        } else {
    	    result += num[i]
        }
    }

  if(result.startsWith('-')) {
  	result = result.slice(1)
  }

  if(result.endsWith('-')) {
  	result = result.slice(0, -1)
  }
  
  return result
}

console.log(dashatize(274)) // "2-7-4"
console.log(dashatize(5311)) // "5-3-1-1"
console.log(dashatize(86320)) // "86-3-20"
console.log(dashatize(974302)) // "9-7-4-3-02"
console.log(dashatize(0)) // "0"
console.log(dashatize(-1)) // "1"
console.log(dashatize(-28369)) // "28-3-6-9"  */