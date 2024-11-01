// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {  
    const odd = array.filter((e) => e % 2 !== 0).sort((a,b) => a - b)
    
    let sortOdd = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            sortOdd.push(array[i])
        } else {
            sortOdd.push(odd.shift())
        } 
    }
    return sortOdd
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]
console.log(sortArray([])) //[]
  