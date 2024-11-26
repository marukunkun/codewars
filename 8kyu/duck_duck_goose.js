// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.

// name is a property of Player objects, e.g Player.name

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

class Player {
  constructor(name) {
  	this.name = name
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"]
let players = ex_names.map((n) => new Player(n))

function duckDuckGoose(players, goose) {
  while(goose > players.length) {
    goose = goose-(players.length)
  }
  
  return players[goose-1].name
}

console.log(duckDuckGoose(players, 1)) //  "a"
console.log(duckDuckGoose(players, 3)) //  "c"
console.log(duckDuckGoose(players, 10)) // "z"
console.log(duckDuckGoose(players, 20)) // "z"
console.log(duckDuckGoose(players, 30)) // "z"
console.log(duckDuckGoose(players, 18)) // "g"
console.log(duckDuckGoose(players, 28)) // "g"
console.log(duckDuckGoose(players, 12)) // "b"
console.log(duckDuckGoose(players, 2)) //  "b"
console.log(duckDuckGoose(players, 7)) //  "f"