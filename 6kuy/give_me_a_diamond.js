// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null, if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// A size 3 diamond:
//  *
// ***
//  * 
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n % 2 === 0 || n <= 0) {
    return null
  }
  
  let diamond = ''
  let midpoint = Math.floor(n / 2)
  
  // Top half (including the middle row)
  for (let i = 0; i <= midpoint; i++) {
    let spaces = ' '.repeat(midpoint - i)
    let stars = '*'.repeat(2 * i + 1)
    diamond += spaces + stars + '\n'
  }
  
  // Bottom half (excluding the middle row)
  for (let i = midpoint - 1; i >= 0; i--) {
    let spaces = ' '.repeat(midpoint - i)
    let stars = '*'.repeat(2 * i + 1)
    diamond += spaces + stars + '\n'
  }
  
  return diamond
}

console.log(diamond(1)) // "*\n"
console.log(diamond(3)) // " *\n***\n *\n"
console.log(diamond(5)) // "  *\n ***\n*****\n ***\n  *\n"

console.log(diamond(2)) // null
console.log(diamond(-3)) // null
console.log(diamond(0)) // null