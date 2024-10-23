// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// Solution 1
function howMuchILoveYou(nbPetals) {
    while(nbPetals > 6) {
    	nbPetals = nbPetals - 6
    }
    
    switch(nbPetals) {
      case 6: return 'not at all'
      case 5: return 'madly'
      case 4: return 'passionately'
      case 3: return 'a lot'
      case 2: return 'a little'
      case 1: return 'I love you'
    }
}

// Solution 2
function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }

    return phrase[nbPetals % 6 ]
}

console.log(howMuchILoveYou(7)) // "I love you"
console.log(howMuchILoveYou(3)) // "a lot"
console.log(howMuchILoveYou(6)) // "not at all"
