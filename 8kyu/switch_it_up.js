// When provided with a number between 0-9, return it in words.

// Input :: 1
// Output :: "One".

// If your language supports it, try using a switch statement.

// Solution 1
function switchItUp(number){
	switch (number) {
  	case 1: return 'One'
      break
    case 2: return 'Two'
      break
		case 3: return 'Three'
      break
    case 4: return 'Four'
      break
    case 5: return 'Five'
      break
		case 6: return 'Six'
      break
    case 7: return 'Seven'
      break
    case 8: return 'Eight'
      break
		case 9: return 'Nine'
      break
    default: return 'Zero'
  }
}

// Solution 2
function switchItUp(number){
  let words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  return words[number]
}