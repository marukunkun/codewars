// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). 
// you can use one of slice() substring() or substr() do it.
// return the result after finished the work.

function cutIt(arr) {
    const shortestLength = Math.min(...arr.map(e => e.length));
    return arr.map(e => e.slice(0, shortestLength));
  }
  
  
  console.log(cutIt(["hfaf","ntrpg","agywjst","xseyysyr","htllulqxtskr","jtgguqlgaffdu","xfbpqoqztqpsb","ltfpxzwwiifxtu","oeinmqmmjzdbth","zxdrwozxdhksow","gcfbcwcqiksidwmfuc","cygrsiwiknmcqajhix"]))
  //[ 'agyw', 'ltfp', 'gcfb', 'jtgg', 'oein', 'cygr', 'ntrp', 'htll', 'xsey', 'xfbp', 'hfaf', 'zxdr' ]
  console.log(cutIt(["ab","cde","fgh"])) // ["ab","cd","fg"]
  console.log(cutIt(["abc","defgh","ijklmn"])) // ["abc","def","ijk"]
  console.log(cutIt(["codewars","javascript","java"])) // ["code","java","java"] */