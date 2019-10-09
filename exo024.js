module.exports = function endsWith(str = "", end, positionopt = str.length) {

    let words = str.split(' ');
    let lengthWords = words.length;


    if (words[lengthWords - 1] == end) {
        return true
    }
    else if (positionopt != str.length) {
        let word = str.substr(0, positionopt);
        let lengthEnd = end.length;
        let endWord = word.substr(-lengthEnd);

        if (endWord == end) {
            return true;
        }


    }
    else {
        return false;
    }

}


