// Return the century of the input year.
// The input will always be a 4 digit string, so there is no need for validation.

// if the first number > 1 and the second number is 1 = 'st'
// if the first number > 1 and the second number is 2 = 'nd'
// if the first number > 1 and the second number is 3 = 'rd'

function whatCentury(year) {
  const frstNums = year.slice(0, 2)
  const lstNums = year.slice(2)
  const century = lstNums > 0 ? String(+frstNums + 1) : frstNums
  
  if(+century !== 11 && +century[1] === 1) {
    return century + 'st'
  } else if(+century !== 12 && +century[1] === 2) {
    return century + 'nd'
  } else if(+century !== 13 && +century[1] === 3) {
    return century + 'rd'
  } else {
    return century + 'th'
  }
}

console.log(whatCentury("1999")) // "20th"
console.log(whatCentury("2011")) // "21st"
console.log(whatCentury("2154")) // "22nd"
console.log(whatCentury("2259")) // "23rd"
console.log(whatCentury("1234")) // "13th"
console.log(whatCentury("1023")) // "11th"
console.log(whatCentury("2000")) // "20th"