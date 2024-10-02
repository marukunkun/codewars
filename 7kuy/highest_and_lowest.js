// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution 1
function highAndLow(numbers){
    let min = Math.min(...([...numbers].join('').split(' ').map(e => +e)))
    let max = Math.max(...([...numbers].join('').split(' ').map(e => +e)))
  
    return `${max} ${min}`
}

// Solution 2
function highAndLow(numbers){
	numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
  
console.log(highAndLow("1 2 3 4 5")) // return "5 1"
console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")) // return "9 -5"