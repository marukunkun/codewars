// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics
// and print out the string without the use of the Polish letters.

function correctPolishLetters(string) {
	const polishChange = {
	    'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
	    'ó': 'o',
  	    'ś': 's',
        'ź': 'z',
        'ż': 'z'
    }
  
    let result = ''

    for(let i = 0; i < string.length; i++) {
  	    result += polishChange[string[i]] || string[i]
    }

    return result
}

console.log(correctPolishLetters("Jędrzej Błądziński")) // "Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")) // "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")) // "Maria Sklodowska-Curie"