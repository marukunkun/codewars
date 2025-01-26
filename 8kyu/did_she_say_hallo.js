// You received a whatsup message from an unknown number.
// Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

// Notes
// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// Solution 1
function validateHello(greetings) {
    const hello = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    greetings = greetings.toLowerCase()
  
    if(hello.includes(greetings)) {
        return true
    } else {
  	    for(let i = 0; i < greetings.length; i++) {
			if(greetings.split(hello[i]).length > 1) {
    	    	return true
    	    }
  	    }
    return false
    }
}

// Solution 2 (using regex)
function validateHello(greetings) {
    return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
}

// Solution 3
function validateHello(greetings) {
    const messages = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
    const lowerCaseGreetings = greetings.toLowerCase()
  
    for (let i = 0; i < messages.length; i++) {
        if (lowerCaseGreetings.includes(messages[i])) {
            return true
        }
    }
    return false
}

console.log(validateHello('ahohello')) // true
console.log(validateHello('ahoj')) // true
console.log(validateHello('meh')) // false
console.log(validateHello("trEs Salut QUe")) // true