 function kebabCase( str = ''){
/*
    if(str.indexOf(' ')){
        return str.replace(/ /g,'-');           
    }
*/

var str = "";
var length = str.length;
for (var i = 0; i <length; i++) {
  str = str + i;
}

console.log(length);
// expected output: "012345678"

}
kebabCase('testttDsSé');