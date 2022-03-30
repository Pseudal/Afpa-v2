var lignes= parseInt(prompt("Entrez le nombre de lignes"));
var j = 0;
var stock = "";
for(var i = 0; i < lignes; i++){
    while(j <= i){
        stock += "*";
        j++;
    }
    j = 0;
    stock += "\n";
}
console.log(stock);