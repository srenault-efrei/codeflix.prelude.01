module.exports = function isAlphaDigit(str = "") {

    let boolean = false; 
    let letters = /^[A-Za-z]+$/;
    let numbers = /^\d+$/;

    if(str.match(numbers) || (str.match(letters)) ){
        return true;
    }else{
        return false;
    }

}


