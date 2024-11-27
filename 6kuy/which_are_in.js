// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(arr1,arr2){
	let result = []
  
	for(let i = 0; i < arr2.length; i++) {
      	for(let j = 0; j < arr1.length; j++) {
        	if(arr2[i].split(arr1[j]).length >= 2) {
				result.push(arr1[j])
        }
    }
  }
  return result.filter((e,i) => result.indexOf(e) === i).sort()
}

let arr2 = ["lively", "alive", "harp", "sharp", "armstrong"]

let arr1 = ["xyz", "live", "strong"]
console.log(inArray(arr1, arr2)) // ["live", "strong"]

arr1 = ["live", "strong", "arp"]
console.log(inArray(arr1, arr2)) // ["arp", "live", "strong"]

arr1 = ["tarp", "mice", "bull"]
console.log(inArray(arr1, arr2)) // []
