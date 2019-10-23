module.exports = function unEscapeHtml(str = "") {

 arraySeperator = str.split(';')

 let open = unescape( arraySeperator[0])
 let close = unescape(arraySeperator[2])

 return open+arraySeperator[1]+close
    

}


