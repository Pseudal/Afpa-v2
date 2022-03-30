
    // deuxieme partie de l'exo 3;
    var lignes=parseInt(prompt("Veuillez entrer un nombre"));
    var etoile="";
    var autre="";
    for( var i=0; i<lignes; i++ ){
        etoile=etoile + "*";
    }
    
    for( var j=0; j<lignes; j++){
        autre=autre+etoile+"\n";
    }
    console.log(autre);