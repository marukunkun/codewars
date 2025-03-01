// Given a string, turn each character into its ASCII character code and join them together to create a number
// let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667

// total2 = 656661

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    // 1. turn to ascii
    //    and declare & assign to total1

    let total1 = x.split('').map(e => String(e.charCodeAt())).join('')
    
    // 2. replace 7 with 1 
    //    and declare & assign to total2
    let total2 = total1.replaceAll('7', '1')

    // 3. addition of total1
    //    addition of total2
    //    and return the difference between them

    total1 = total1.split('').reduce((acc, curr) => +acc + +curr, 0)
    total2 = total2.split('').reduce((acc, curr) => +acc + +curr, 0)

    return total1 - total2
}

console.log(calc('abcdef')) // 6
console.log(calc('ifkhchlhfd')) // 6
console.log(calc('aaaaaddddr')) // 30 
console.log(calc('jfmgklf8hglbe')) // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')) // 96