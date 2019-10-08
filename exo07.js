module.exports = function snakeCase(str=""){
 let snakeCase = '';

// on verifie si on tombe sur un - globalement

 if(str.match(/-/g)){
    snakeCase = str.replace(/-/g,'_'); // on change le tiret par un _
    snakeCase = snakeCase.replace(/(^_|_$)/g,""); // on remplace le debut et la fin de la chaine avec _ par rien du tout 
 }
 else if (str.match(/[A-Z]/g)){ // on verifie si on tombe globalement sur des majuscules
    snakeCase = str.replace(/([A-Z])/g,' $1') // Quand on tombe sur une maj on met un espace avant
    snakeCase = snakeCase.replace(/ /g,'_'); // chaque espace est remplace par un _
    snakeCase = snakeCase.replace(/_/,''); // on remplace le premier _ par rien du tout
 }
 else{
    snakeCase = str.replace(/ /g,'_');  // on remplace globalement les espace par des _
 }

snakeCase = snakeCase.toLowerCase(); // pour chaque conditions on met le mot final en minisucule
 return snakeCase;
}

