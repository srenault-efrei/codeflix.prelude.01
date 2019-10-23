module.exports = function escapeRegExp(str = "") {


    let word = ''

    word = str.replace(')', ') ')
    word = word.replace(']', '] ')

    let arraySeparator = word.split(' ')
    let firstWord = arraySeparator[0]
    let secondWord = arraySeparator[1]
    let thirdWord = arraySeparator[2]

    return '\\' + firstWord + '\\' + secondWord + '\\' + thirdWord + '\\'
}




