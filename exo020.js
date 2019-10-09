module.exports = function repeat (str = "", timesopt = 1 )
    {
        let word = '';

        if(timesopt !=0){

            for(let i=0; i<timesopt ; i++){

                word += str;
               }

        }
        else{
            word = '\'\'';
        }
      
        
       return word;
    
    }
         
        