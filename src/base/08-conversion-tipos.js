//Cast explícito
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)
console.log()

const stringDecimal = "3.14"
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float) 
console.log()


const binary = '1010'
const decimal = parseInt(binary,2)
console.log(decimal)
console.log(typeof decimal)
console.log()

//Cast implicito
const sum = "5" + 3  //concatenación
console.log(sum)
console.log()

const sumWithNumber = 2 + true;
console.log(sumWithNumber)
console.log()

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue +  numberValue)
console.log(booleanValue + booleanValue)
