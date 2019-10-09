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
const slice = require('./exo013')
const count = require('./exo014')
const countSubstrings = require('./exo015')
const countWords = require('./exo016')
const indexOf = require('./exo017')
const lastIndexOf = require('./exo018')
const insert = require('./exo019')
const repeat = require('./exo020')
const reverse = require('./exo021')
const splice = require('./exo022')
const trim = require('./exo023')
const endsWith = require('./exo024')
const includes = require('./exo025')
const isAlpha = require('./exo026')
const isAlphaDigit = require('./exo027')
const isBlanck = require('./exo028')
const isDigit = require('./exo029')
const isEmpty = require('./exo030')

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

console.log("\n")

console.log("slice : ");
console.log(slice("chOpper",1));
console.log(slice("chOpper",-4));
console.log(slice("chOpper",1,4));


console.log("\n")

console.log("count : ");
console.log(count("chOpper"));

console.log("\n")

console.log("countSubstrings : ");
console.log(countSubstrings("Tony Tony Chopper!",'Tony'));
console.log(countSubstrings("gomu gomu no bazooka",'gatling'));


console.log("\n")

console.log("indexOf : ");
console.log(indexOf("chOpper",'O'));
console.log(indexOf("chOpper",'o'));

console.log("\n")
console.log("lastIndexOf : ");
console.log(lastIndexOf("chOpper",'p'));
console.log(lastIndexOf("chOpper",'o'));

console.log("\n")
console.log("insert : ");
console.log(insert("chpper",'O',2));
console.log(insert("Tony",'Tony chOpper',4));

console.log("\n")
console.log("repeat : ");
console.log(repeat("w",3));
console.log(repeat("gomu",0));


console.log("\n")
console.log("reverse : ");
console.log(reverse("chOpper"));


console.log("\n")
console.log("countWords : ");
console.log(countWords("Tony Tony ChOpper"));
console.log(countWords("TonyTonyCh0pper"));
console.log(countWords("tonyTony"));
console.log(countWords("Tony Tony - Ch0pper"));


console.log("\n")
console.log("splice : ");
console.log(splice("Tony Tony ChOpper",0,10));
console.log(splice("Tony ChOpper",0,4,'Tony Tony'));
console.log(splice("Tony Tony Usopp",-5,5,'Chopper'));

console.log("\n")
console.log("trim : ");
console.log(trim(" Tony Tony ChOpper "));
console.log(trim("--Tony Tony ChOpper--",'-'));


console.log("\n")
console.log("endsWith : ");
console.log(endsWith("Tony Tony ChOpper","ChOpper"));
console.log(endsWith("Tony Tony ChOpper","Tony"));   
console.log(endsWith("ChOpper","hO",3));   

console.log("\n")
console.log("includes : ");
console.log(includes("ChOpper","pper"));
console.log(includes("ChOpper","O",3));

console.log("\n")
console.log("isAlpha : ");
console.log(isAlpha("ChOpper"));
console.log(isAlpha("ChOpper!"));
console.log(isAlpha("ChOpper and Usopp"));


console.log("\n")
console.log("isAlphaDigit : ");
console.log(isAlphaDigit("chOpper"));
console.log(isAlphaDigit("1986"));
console.log(isAlphaDigit("1337-42"));


console.log("\n")
console.log("isBlanck : ");
console.log(isBlanck(""));
console.log(isBlanck("  "));
console.log(isBlanck("Chopper!"));

console.log("\n")
console.log("isDigit : ");
console.log(isDigit("42"));
console.log(isDigit("9.4"));
console.log(isDigit("ch0pper!"));


console.log("\n")
console.log("isEmpty : ");
console.log(isEmpty(""));
console.log(isEmpty("  "));
console.log(isEmpty("ch0pper"));