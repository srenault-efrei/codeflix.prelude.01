module.exports = function words(str = "", patternopt, flagsopt = '') {
    let newString = ''
   if(str.includes(' ') && (!str.includes('-'))){
       return str.split(" ")
   }
   else if (str.includes("-")){
    newString = str.replace(/ /g,"");
    return newString.split('-')
   }
   else if (str.match(/([A-Z])/g)){
    newString =str.replace(/([A-Z])/g,' $1')
    return newString
   }

}

