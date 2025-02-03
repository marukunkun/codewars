// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n).
// The first line has one s;
// Second line have two s;
// and so on..Fifth line have five s;

// Note 1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note 2: Using a string template can make your job easier.

function fiveLine(s) {
	s = s.trim()
    let result =''

    for(let i = 1; i <= 5; i++) {
  	    result += s.repeat(i) + '\n'
    }
    return result.slice(0, -1)
}

console.log(fiveLine("  a")) // "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it

console.log(fiveLine("  xy ")) // "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it