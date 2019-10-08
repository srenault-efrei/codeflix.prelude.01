const lowerCase = require('./exo01')
const upperCase = require('./exo02')
const length = require('./exo03')
const capitalize = require('./exo04')
const decapitalize = require('./exo05')
const kebabCase = require('./exo06')

console.log("Lower Case : ");
console.log(lowerCase("STEVEN"));

console.log("Upper Case : ");
console.log(upperCase("steven"));

console.log("taille : ");
console.log(length("steven"));

console.log("capitalize : ");
console.log(capitalize("One Code",true));

console.log("decapitalize : ");
console.log(decapitalize("El Daglo"));


console.log("kebabCase : ");
console.log(kebabCase("LoveOneCode"));