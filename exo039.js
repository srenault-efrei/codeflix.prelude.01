module.exports = function escapeHtml(str = "") {

    let close = ''
    let open = ''
    let regexClose = /<\/[\w+]>/g
    let regexOpen = /<[\w+]>/g
    let regexContent = />.+</g

    if (str.match(regexOpen)) {
        open = str.match(regexOpen)[0]
        open = escape(open)
    }
    if (str.match(regexClose)) {
        close = str.match(regexClose)[0]
        close = escape(close)

    }
    let content  = str.match(regexContent)[0]
    content =  content.replace('>','')
    content = content.replace('<','');

   return open.trim()+content+close
    

}


