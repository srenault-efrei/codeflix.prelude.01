module.exports = function includes(str = "", search, positionopt = 0) {

    let boolean = 'false';
   if (positionopt == 0){
       if (str.match(search)){
           boolean =  true;
       }
   }
   else{
        let word = str.slice(positionopt);
        if(word.match(search)){
            boolean =  true;
        }
   }

   return boolean;

}


