module.exports = function swapCase(str=""){

   let swapCase = '';

   words = str.split(' '); // permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.

   for(word of words){ // on boucle sur chaque mot  de notre tableau

    for(let i=0 ; i<word.length;i++){ // on parcours  chaque mot du debut jusqu'a la fin du mot 
        if(word[i] == word[i].toUpperCase()){ // on verifie si le charactere en ? est une majuscule  
            swapCase += word[i].toLowerCase(); // on met le caractere en minisucle et on le place dans la variable tout en concatenant chaque caractere
        }
        else{
            swapCase += word[i].toUpperCase(); // on fait l'inverse
        }
        
    }
       
       swapCase = swapCase+' '; // on ajoute un espace apres chaque mot pour evite qu'ils soient collés
   }
    return swapCase;
   }
   
   