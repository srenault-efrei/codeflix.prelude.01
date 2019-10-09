module.exports = function insert (str="", toInsertopt ='',positionopt = 0)
    {
        let startString = '';
        let endString ='';
        let word = '';

        startString = str.substr(0,positionopt);
        endString = str.slice(positionopt);
        
        if (positionopt >= str.length){
             word = startString+' '+toInsertopt+endString;
        }
        else{
             word = startString+toInsertopt+endString;
        }
        
        
        return word;
        
    
    }
         
        