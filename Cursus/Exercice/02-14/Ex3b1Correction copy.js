var nbLignes = 5;
var nbEtoiles = 1;
nbEspace = nbLignes - 1;
var stock = " ";

for(var i = 0; i < nbLignes; i++){
    for(var j = 0; j < nbEspace; j++){
        stock += " ";
    }

    for(var j = 0; j < nbEtoiles; j++){
        stock += "*";
    }
    stock += "\n"
    nbEtoiles += 2;
    nbEspace--;
    j = 0;
}
console.log(stock);