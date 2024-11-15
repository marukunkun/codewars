// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

String.prototype.camelCase = function(){
  return this.length === 0 ? '' : this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('')
}

console.log("test case".camelCase()) // "TestCase"
console.log("camel Case method".camelCase()) // "CamelCaseMethod"
console.log("say hello".camelCase()) // "SayHello"
console.log("camel case word".camelCase()) // "CamelCaseWord"
console.log("".camelCase()) // ""