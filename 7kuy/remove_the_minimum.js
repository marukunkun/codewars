// The museum of incredibly dull things wants to get rid of some exhibits.
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibits.
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one.
// Fair enough.

// Task
// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Solution 1
function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    return numbers.slice(0 ,numbers.indexOf(min)).concat(numbers.slice(numbers.indexOf(min)+ 1))
}

// Solution 2
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)))


console.log(removeSmallest([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]
console.log(removeSmallest([])) // []