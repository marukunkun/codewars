// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
    return names.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
}

console.log(capMe(['johnny'])) // ['Johnny'])                 
console.log(capMe(['RALPH', 'GEORGIA', 'CHRISTINA'])) // ['Ralph', 'Georgia', 'Christina']