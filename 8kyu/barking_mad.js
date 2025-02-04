// Teach snoopy and scooby doo how to bark using object methods.
// Currently only snoopy can bark and not scooby doo.

// Use method prototypes to enable all Dogs to bark.

function Dog (breed) {
  this.breed = breed
}

const snoopy = new Dog("Beagle")

Dog.prototype.bark = function() {
  return "Woof"
}

const scoobydoo = new Dog("Great Dane")

console.log(snoopy.bark()) // return "Woof"
console.log(scoobydoo.bark()) // return "Woof"