module.exports = function countSubstrings (str="", substring)
{
        let count = 0;

        words = str.split(' ');
        let lengthWords = words.length;
       
     
          for(let i = 0; i<lengthWords-1; i++){
            if(words[i] == substring){
                count++;
            }
          }
      
       return count;    

         }
         
         