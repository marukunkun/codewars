// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// Solution 1
function strCount(str, letter){  
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
          count++
      }
    }
    return count
}

// Solution 2
function strCount(str, letter){  
    return str.split('').filter(e => e === letter).length
}


console.log(strCount("Hello", 'o'))  //  1
console.log(strCount("Hello", 'l'))  //  2
console.log(strCount("", 'z'))       //  0