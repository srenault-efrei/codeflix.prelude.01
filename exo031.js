module.exports = function isLowerCase(str = "") {

    let boolean = true
    for (const word of str) {
        if (word != word.toLowerCase()) {
            boolean = false
        }
    }
    return boolean
}


