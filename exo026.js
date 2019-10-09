module.exports = function isAlpha(str = "") {

    let boolean = false; 
    let letters = /^[A-Za-z]+$/;

    if(str.match(letters)){
        return true;
    }else{
        return false;
    }

}


