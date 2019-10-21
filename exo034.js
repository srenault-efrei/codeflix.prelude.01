module.exports = function isString(str = "") {

    let type = typeof str;
    
    if (type == 'string') {
        return true
    } else {
        return false
    }
}

