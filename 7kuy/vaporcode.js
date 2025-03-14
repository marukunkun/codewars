// Write a function that converts any sentence into a V A P O R W A V E sentence. 
// a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Solution 1
function vaporcode(str) {
	return str.toUpperCase().split(" ").join("").split("").join("  ")
}

// Solution 2
function vaporcode(str) {
	str = str.replaceAll(' ', '')
	let vaporwave = ''

	for(let i = 0; i < str.length; i++) {
  	    vaporwave += (`${str[i]}  `)
    }

    return vaporwave.toUpperCase().trim()
}

console.log(vaporcode("Lets go to the movies")) // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
console.log(vaporcode("Why isnt my code working")) // "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"