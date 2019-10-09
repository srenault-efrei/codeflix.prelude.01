module.exports = function countWords(str = "") {
    let count = '';
    let word = '';


    if (str.match(/ /g)) {
        word = str.split(' ');
        count = word.length;
    }
    else if (str.match(/[A-Z]/g)) {
        word = str.replace(/([A-Z])/g, ' $1')
        word = word.replace(/(^ | $)/g, "")

        word = word.split(' ');
        count = word.length;

    }

    if (str.match(/-/g)) {
        word = str.replace(/-/g, "");
        word = word.replace(/ /g, "");
        word = word.replace(/([A-Z])/g, ' $1')
        word = word.replace(/(^ | $)/g, "")
        word = word.split(' ');
        count = word.length;
    }

    return count;



}

