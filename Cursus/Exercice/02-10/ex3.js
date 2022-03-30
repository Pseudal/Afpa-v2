var sexe = prompt("votre sexe ?(homme/femme)")
var age = prompt("votre age ?")
n1 = parseInt(age);

if(sexe == "homme"){
    if( age >= 20){
        alert("vive les impots");
    }    
    else{
        alert("pas d'impot")
    }
}
else{
    if( age >= 18 && age <= 35){
        alert("vive les impots");
    }
    else{
        alert("pas d'impot")
    }
}