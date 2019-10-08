module.exports = function substr(str="",start, len=str.length){
   
   let result = '';
   
    if(len != str.length){
    result = str.substr(start,len);

}else{
    result = str.substr(start,len)
}
 
    return result;
    }
    
    