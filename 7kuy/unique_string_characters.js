// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

function solve(a,b) {
	let strA = ''
	for(let i = 0; i < a.length; i++) {
  	    if(!b.includes(a[i])) {
        	strA += a[i]	
        }
    }
  
    let strB = ''
	for(let i = 0; i < b.length; i++) {
  	    if(!a.includes(b[i])) {
    	    strB += b[i]	
        }
    }
    return strA.concat(strB)
}

console.log(solve("xyab","xzca")) // "ybzc" 
console.log(solve("xyabb","xzca")) // "ybbzc"
console.log(solve("abcd","xyz")) // "abcdxyz"
console.log(solve("xxx","xzca")) // "zca"