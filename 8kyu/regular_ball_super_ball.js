// Create a class Ball. 
// Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."


// Solution 1
class Ball {
	constructor(type = 'regular') {
  	    this.ballType = type
    }
    ballType() {
  	    console.log(this.ballType)
    }
}

// Solution 2
let Ball = function(ballType) {
    this.ballType = ballType || 'regular'
}

ball1 = new Ball()
ball2 = new Ball("super")

ball1.ballType     // "regular"
ball2.ballType     //"super"