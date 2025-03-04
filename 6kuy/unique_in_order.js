// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(element) {
	return Array(...element).filter((e,i,a) => a[i] !== a[i+1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       // [1,2,3]