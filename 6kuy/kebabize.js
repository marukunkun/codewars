// Modify the kebabize function so that it converts a camel case string into a kebab case.

// the returned string should only contain lowercase letters

function kebabize(str) {
	let result = ''
  
	str = str.split('').filter(e => isNaN(e))
  									 .forEach(e => e === e.toUpperCase() ? result += '-' + e.toLowerCase() : result += e.toLowerCase())
                     
    return result.startsWith('-') ? result.slice(1) : result
}

console.log(kebabize('myCamelCasedString')) // 'my-camel-cased-string'
console.log(kebabize('MyCamelHas3Humps')) // 'my-camel-has-humps'
console.log(kebabize('myCamelHas3Humps')) // 'my-camel-has-humps'
console.log(kebabize('CAMEL')) // 'c-a-m-e-l'
console.log(kebabize('cAMEL')) // 'c-a-m-e-l'
console.log(kebabize('AbstractSingletonProxyFactoryBean')) // 'abstract-singleton-proxy-factory-bean'
console.log(kebabize('abstractSingletonProxyFactoryBean')) // 'abstract-singleton-proxy-factory-bean'
