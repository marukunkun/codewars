function solve(s) {
	let uppercase = 0
    let lowercase = 0
    let number = 0
    let special = 0
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let i = 0; i < s.length; i++) {
        if(s[i].toUpperCase() === s[i] && alphabet.includes(s[i].toLowerCase())) {
    		uppercase++  	
        } else if(s[i].toLowerCase() === s[i] && alphabet.includes(s[i].toLowerCase())) {
      	    lowercase++
        } else if(!isNaN(s[i])) {
      	    number++
        } else {
      	    special++
        }
    }
    return [uppercase, lowercase, number, special]
}