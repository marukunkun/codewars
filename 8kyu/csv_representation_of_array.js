// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

/*
 input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
 output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
*/

// Array's length > 2.

// Note: you shouldn't escape the \n, it should work as a new line.

// Solution 1
function toCsvText(array) {
	let result = ''
	for(let i = 0; i < array.length; i++) {
  	if(i !== array.length -1) {
    	result += `${array[i]}${'\n'}`
    } else {
    	result += `${array[i]}`
    }
   	
  }
  return result
}

// Solution 2 (way easier lol)
function toCsvText(array) {
  return array.join('\n')
}

console.log(toCsvText([[ 0, 1, 2, 3, 45 ],
											 [ 10,11,12,13,14 ],
                       [ 20,21,22,23,24 ],
                       [ 30,31,32,33,34 ]]))
                       // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34')

console.log(toCsvText([[ -25, 21, 2, -33, 48 ],
                       [ 30,31,-32,33,-34 ]]))
                       // '-25,21,2,-33,48\n30,31,-32,33,-34');

console.log(toCsvText([[ 5,55,5,5,55 ],
                       [ 6,6,66,23,24 ],
                       [ 666,31,66,33,7 ]]))
                       //  '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7')