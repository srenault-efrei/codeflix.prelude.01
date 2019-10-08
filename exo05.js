
module.exports = function decapitalize(str=''){
    
    words = str.split(' ');
    let decapitalise = '';
    for (word of words){
         decapitalise += word[0].toLowerCase() + word.slice(1).toLowerCase()+ ' ';
         
    }
    return decapitalise;
}