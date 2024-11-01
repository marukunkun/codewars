// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Solution 1
function removeUrlAnchor(url){
	const i = url.indexOf('#')
    return i !== -1 ? url.slice(0, i) : url
}

// Solution 2
function removeUrlAnchor(url){
    return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about')) // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')) // 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')) // 'www.codewars.com/katas/'