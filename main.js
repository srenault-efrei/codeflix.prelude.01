const lowerCase = require('./exo01')
const upperCase = require('./exo02')
const length = require('./exo03')
const capitalize = require('./exo04')
const decapitalize = require('./exo05')
const kebabCase = require('./exo06')
const snakeCase = require('./exo07')
const swapCase = require('./exo08')
const chartArt = require('./exo09')
const first = require('./exo010')
const last = require('./exo011')
const substr = require('./exo012')

console.log("Lower Case :");
console.log(lowerCase("STEVEN \n"));

console.log("Upper Case : ");
console.log(upperCase("steven \n"));

console.log("taille : ");
console.log(length("steven \n"));

console.log("capitalize : ");
console.log(capitalize("One Code \n",true));

console.log("decapitalize : ");
console.log(decapitalize("El Daglo \n"));


console.log("kebabCase : ");
console.log(kebabCase("love one code"));
console.log(kebabCase("LoveOneCode"));
console.log(kebabCase("-Love-One-Code \n"));

console.log("snakeCase : ");
console.log(snakeCase("gold d roger"));
console.log(snakeCase("GoldDRoger"));
console.log(snakeCase("-Gold-D-Roger-"));

console.log("\n")

console.log("swapCase : ");
console.log(swapCase("One Code"));
console.log(swapCase("1337 Fruits\n"));

console.log("chartArt : ");
console.log(chartArt("chopper",0));
console.log(chartArt("chopper",1));

console.log("first : ");
console.log(first("chopper"));
console.log(first("chopper",2));
console.log(first("tony",5));

console.log("\n")

console.log("last : ");
console.log(last("chopper"));
console.log(last("chopper",2));
console.log(last("tony",5));

console.log("\n")

console.log("substr : ");
console.log(substr("tony tony chopper",10));
console.log(substr("ch0pper",2,2));
