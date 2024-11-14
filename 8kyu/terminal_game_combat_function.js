// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. 
// Health can't be less than 0.

function combat(health, damage) {
	return health - damage < 0 ? 0 : health - damage
}

console.log(combat(100, 5)) // 95
console.log(combat(92, 8)) // 84
console.log(combat(20, 30)) // 0, "Health cannot go below 0"