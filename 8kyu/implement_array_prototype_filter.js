// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter().
// Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function (func) {
  const result = []
  
    for(let i = 0; i < this.length; i++) {
        if(func(this[i])) {
    	    result.push(this[i])
        }
    }
  return result
}

console.log([1,2,3,4].filter((num)=>{ return num > 3})) // [4]
