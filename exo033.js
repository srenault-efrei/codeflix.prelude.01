module.exports = function isNumeric(str = "") {

    let boolean = false

    if (Number.isInteger(str)) {
        boolean = true
    }
    return boolean
}

