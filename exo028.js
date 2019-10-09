module.exports = function isBlanck(str = "") {

    let boolean = false;
    let regex = /^\s+$/
    if(str.match(regex) || str.length == 0 ){
        boolean = true;
    }
   return boolean
}


