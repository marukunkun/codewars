// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  let team1 = 0
  let team2 = 0
  
  array.forEach((e,i) => i % 2 === 0 ? team1 += e : team2 += e)
  return [team1, team2]
}

console.log(rowWeights([80])) // [80,0]
console.log(rowWeights([100,50])) // [100,50]
console.log(rowWeights([50,60,70,80])) // [120,140]
console.log(rowWeights([13,27,49])) // [62,27]
console.log(rowWeights([70,58,75,34,91])) // [236,92]
console.log(rowWeights([29,83,67,53,19,28,96])) // [211,164]
console.log(rowWeights([0])) // [0,0]
console.log(rowWeights([100,51,50,100])) // [150,151]
console.log(rowWeights([39,84,74,18,59,72,35,61])) // [207,235]
console.log(rowWeights([0,1,0])) // [0,1]