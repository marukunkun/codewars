// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
	const firstN = numbers[0]
    const lastN = numbers[numbers.length - 1]
  
    let fullStage = []
  
    for(let i = firstN; i <= lastN; i++) {
  	    fullStage.push(i)
    }
    return fullStage
}

console.log(pipeFix([1,2,3,5,6,8,9])) // [1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1,2,3,12])) // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6,9])) // [6,7,8,9]
console.log(pipeFix([-1,4])) // [-1,0,1,2,3,4]
console.log(pipeFix([1,2,3])) // [1,2,3]