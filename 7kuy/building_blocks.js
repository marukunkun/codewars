// Write a class Block that creates a block

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:
	// `getWidth()` return the width of the `Block`
	// `getLength()` return the length of the `Block`
	// `getHeight()` return the height of the `Block`
	// `getVolume()` return the volume of the `Block`
	// `getSurfaceArea()` return the surface area of the `Block`
  
// Note: no error checking is needed

class Block {
	constructor([width, length, height]) {
    	this.width = width
        this.length = length
        this.height = height
    }
    getWidth() {
  	    return this.width
    }
    getLength() {
  	    return this.length
    }
    getHeight() {
  	    return this.height
    }
    getVolume() {
  	    return this.width * this.length * this.height
    }
    getSurfaceArea() {
  	    return 2 * this.width * this.length + 2 * this.length * this.height + 2 * this.height * this.width
    }
}

let buildingA = new Block([3,4,5])

console.log(buildingA.getWidth())
console.log(buildingA.getLength())
console.log(buildingA.getHeight())
console.log(buildingA.getVolume())
console.log(buildingA.getSurfaceArea())