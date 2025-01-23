// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// Solution 1

function validateUsr(username) {
	function validateUsr(username) {
		const res = /^[a-z0-9_]{4,16}$/.test(username)
	  	return res
	}
}


// Solution 2 (without using regex)
function validateUsr(username) {
	let allowed = 'abcdefghijklmnopqrstuvwxyz0123456789_'
	username = username.split('')
    
    return username.every(e => allowed.includes(e)) && username.length >= 4 && username.length <= 16
}

console.log(validateUsr('asddsa')) // true
console.log(validateUsr('a')) // false
console.log(validateUsr('Hass')) // false
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas')) // false
console.log(validateUsr('')) // false
console.log(validateUsr('____')) // true
console.log(validateUsr('012')) // false
console.log(validateUsr('0123')) // true
console.log(validateUsr('1234567890abcdefg')) // false
console.log(validateUsr('p1pp1')) // true
console.log(validateUsr('asd43 34')) // false
console.log(validateUsr('asd43_34')) // true
console.log(validateUsr('abcd')) // true
console.log(validateUsr('aw8o49s5mblkfpd')) // true 
