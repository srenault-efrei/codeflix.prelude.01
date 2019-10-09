module.exports = function splice(str = "", start, deleteCountopt = str.length - start, toAddopt = '') {

    let splice = '';
    let wordReplace = str.substr(start, deleteCountopt);

    if (toAddopt == '') {
        splice = str.replace(wordReplace, '')
    }
    else{
        splice = str.replace(wordReplace, toAddopt)
    }

    return splice
}


