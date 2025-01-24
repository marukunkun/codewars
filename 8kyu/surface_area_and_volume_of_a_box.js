// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
	const area = 2 * width * height + 2 * height * depth + 2 * depth * width
    const volume = width * height * depth
  
    return [area, volume]
}

console.log(getSize(4, 2, 6)) // [88, 48]
console.log(getSize(10, 10, 10)) // [600, 1000]
console.log(getSize(4, 2, 6)[0]) // 88
console.log(getSize(4, 2, 6)[1]) // 48