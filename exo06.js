module.exports= function kebabCase( str = ''){

 let finish = '';
  if(str.match(/-/))
    {
        finish = str.replace(/(^-|-$)/g, "")
    }
    else if (str.match(/([A-Z])/g))//on verifie si on tombe sur des majuscules  
    { 
      finish = str.replace(/([A-Z])/g,' $1') // on ajoute un espace avant chaque maj
      finish = finish.replace(/ /, "") // on remplace le premier espace par rien 
      finish = finish.replace(/ /g, "-")// on remplace tout les espace par un tiret
    }

    else {
      finish = str.replace(/ /g, "-")
    }
  
    finish = finish.toLowerCase();

    return finish;

}
