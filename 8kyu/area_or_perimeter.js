// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area.
// If it is a rectangle, return its perimeter.

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// side equal

const areaOrPerimeter = function(l , w) {
    if(l === w) {
        return l**2
    } else {
        return 2*(l+w)
    }
}

console.log(areaOrPerimeter(6, 10)) // 32
console.log(areaOrPerimeter(3, 3)) // 9
