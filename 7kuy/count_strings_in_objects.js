// Create a function strCount (takes an object as argument) that will count all string values inside an object.

function strCount(obj){
    let count = 0
    for (key in obj) {
      if (typeof obj[key] === 'string') count++
      if (typeof obj[key] === 'object' && obj[key] !== null) count += strCount(obj[key])
    }
    return count
  }
  
  console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",['2', 3],3,4],
    fifth:  null
    })) 
    //returns 3