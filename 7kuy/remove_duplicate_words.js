// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

function removeDuplicateWords(s) {
  return s.split(' ').filter((e,i,arr) => arr.indexOf(e) === i).join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta'