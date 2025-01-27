// Write function parseF which takes an input and returns a number or null if conversion is not possible.
// The input can be one of many different types so be aware.

function parseF(s) {
  const parse = parseFloat(s)
  // check if parse it NaN === null else return parse (who is a number)
  return isNaN(parse) ? null : parse 
}

console.log(parseF("1")) //  1