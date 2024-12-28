// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
// For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3))
}

console.log(mango(2, 3)) // 6$
console.log(mango(3, 3)) // 6$
console.log(mango(5, 3)) // 12$
console.log(mango(9, 5)) // 30$
console.log(mango(25, 17)) // 289$