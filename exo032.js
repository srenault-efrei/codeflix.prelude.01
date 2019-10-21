module.exports = function isUpperCase(str = "") {

    let boolean = true
    for (const word of str) {
        if (word != word.toUpperCase()) {
            boolean = false
        }
    }
    return boolean
}

