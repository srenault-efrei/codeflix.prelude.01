module.exports = function capitalize(str = "", restToLoweropt = false){
    

    if(restToLoweropt == false){
      return str[0].toUpperCase() + str.slice(1);
   }
   else{
       return str[0].toUpperCase() + str.slice(1).toLowerCase();
   }
}