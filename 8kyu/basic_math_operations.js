// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// Solution 1
function basicOp(str, num1, num2) {
	if(str === '+') {
  	return num1 + num2
  } else if(str === '-') {
  	return num1 - num2
  } else if(str === '/') {
  	return num1 / num2
  } else if(str === '*') {
  	return num1 * num2
  }
}

// Solution 2
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// Solution 3
function basicOp(operation, value1, value2) {
	let cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
    }
  return cases[operation]
}