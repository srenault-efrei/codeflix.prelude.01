module.exports = function last(str="", len=1){
   
    let last =  '';
    let length = str.length;
    if (len > length){
        last = str;
    }
    else{
        
        let pos = length - len;
         last =  str.substr(pos,length);
    }
    
    return last;
    }
    
    