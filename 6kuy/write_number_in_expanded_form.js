// You will be given a number and you will need to return it as a string in Expanded Form.

//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 		70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    num = String(num).split('')
    let expanded = []
    
    for(let i = 0; i < num.length; i++) {
        if(num[i] !== "0") {
          expanded.push(num[i] + "0".repeat(num.length-i-1))
        }
    }
    return expanded.join(' + ')
}
  
console.log(expandedForm(12)) // '10 + 2'
console.log(expandedForm(42)) // '40 + 2'
console.log(expandedForm(70304)) // '70000 + 300 + 4'