module.exports = function trim(str = "", whitespaceopt = ' ') {

    let trim = '';
    
    if(whitespaceopt == ' '){
        trim = str.trim(whitespaceopt);
    }
    else{
        trim = str.replace(/-/g,'')
    }

    return trim;
}


