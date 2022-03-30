var a = 1;
var nbr;
var stock;
var calc = 0;

nbr = stock = prompt("nombre de note?")
for (var i = 0; i < nbr; i++) {
    stock = prompt("note " +a+"/"+nbr+".");
    stock = stock / nbr;
    calc = calc + stock;
    a++;
    stock = 0;   
}
alert("votre moyenne est de : " +calc+ "/20 !");