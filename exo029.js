module.exports = function isDigit(str = "") {

    let boolean = false;
    let regex = /^[0-9]*$/
    if(str.match(regex) ){
        boolean = true;
    }
   return boolean
}


