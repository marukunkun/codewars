// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. 
// Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false // (ignore letter case)

// Solution 1
function isIsogram(str){
	str = str.toLowerCase().split('')
    let uniq = str.filter((e, a) => str.indexOf(e) === a)
    return uniq.length === str.length
}

// Solution 2
function isIsogram(str){
	return new Set(str.toUpperCase()).size === str.length;
}

console.log(isIsogram("")) // true 
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false
console.log(isIsogram("isIsogram")) // false 
console.log(isIsogram("Dermatoglyphics")) // true 
console.log(isIsogram("isogram")) // true 
