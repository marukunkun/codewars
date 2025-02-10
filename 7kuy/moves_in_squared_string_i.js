// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop
// efgh     hgfe     |efgh     ijkl
// ijkl     lkji     |ijkl     efgh
// mnop     ponm     |mnop     abcd

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

// Bash Note:
// The input strings are separated by, instead of \n.
// The output strings should be separated by \r instead of \n. See "Sample Tests".

function vert_mirror(string) {
	return string.split('\n').map(e => e.split('').reverse().join('')).join('\n')
}

function hor_mirror(string) {
	return string.split('\n').reverse().join('\n')
}

function oper(fct, s) {
	return fct(s)
}

let s = "abcd\nefgh\nijkl\nmnop"
console.log(oper(vert_mirror, s)) // "dcba\n hgfe\n lkji\n ponm"
console.log(oper(hor_mirror, s)) //"mnop\n ijkl\n efgh\n abcd"