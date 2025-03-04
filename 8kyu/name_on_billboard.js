// You can print your name on a billboard ad.
// Find out how much it will cost you.
// Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600.
// 20 letters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30) {
	return name.repeat(price).length
} 

console.log(billboard("Jeong-Ho Aristotelis")) // 600
console.log(billboard("Abishai Charalampos")) // 570
console.log(billboard("Idwal Augustin")) // 420
console.log(billboard("Hadufuns John",20)) // 260
console.log(billboard("Zoroaster Donnchadh")) // 570
console.log(billboard("Claude Miljenko")) // 450
console.log(billboard("Werner Vígi",15)) // 165
console.log(billboard("Anani Fridumar")) // 420
console.log(billboard("Paolo Oli")) // 270
console.log(billboard("Hjalmar Liupold",40)) // 600
console.log(billboard("Simon Eadwulf")) // 390