// Create a function add(n) which returns a function that always adds n to any number

function add(n) {
	  return function(m) {
    	return n + m
    }
}

console.log(add(1)(3)) // 4
console.log(add(1)(-5)) // -4
console.log(add(3)(20)) // 23