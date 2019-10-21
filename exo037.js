module.exports = function split(str = "", separatoropt, limitopt) {

    let arraySeparator = []

    if (limitopt == undefined) {
        arraySeparator = str.split(separatoropt)
    } else {
        arraySeparator = str.split(separatoropt,limitopt)
    }
    return arraySeparator

}

