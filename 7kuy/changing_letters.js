// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    const vowels = 'aeiou'
    let result = ''
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            result += string[i].toUpperCase()
        } else {
            result += string[i]
        }
    }
    return result
}

console.log(swap("")) // ""
console.log(swap("   @@@")) // "   @@@"
console.log(swap("HelloWorld!")) // "HEllOWOrld!"
console.log(swap("Sunday")) // "SUndAy"
console.log(swap("Codewars")) // "COdEwArs"
console.log(swap("Monday")) // "MOndAy"
console.log(swap("Friday")) // "FrIdAy"
console.log(swap("abracadabra")) // "AbrAcAdAbrA"
console.log(swap("AbrAcAdAbrA")) // "AbrAcAdAbrA"
console.log(swap("ABRACADABRA")) // "ABRACADABRA"
console.log(swap("aBRaCaDaBRa")) // "ABRACADABRA"