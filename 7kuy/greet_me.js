// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Solution 1
function greet(name) {
	return 'Hello ' + name[0].toUpperCase() + name.toLowerCase().slice(1) + '!'
}

// Solution 2
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

let greet = function(name) {
	return "Hello " + name.capitalize() + "!"
}

console.log(greet('riley')) // 'Hello Riley!'