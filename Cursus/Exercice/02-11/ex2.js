var a = 1;
var nbr = parseInt(prompt("nombre de note?"));
var stock = nbr;
var calc = 0;

for (var i = 0; i < nbr; i++) {
    stock = prompt("note " +a+"/"+nbr+".");
    stock = stock / nbr;
    calc = calc + stock;
    a++;
    stock = 0;   
}
alert("votre moyenne est de : " +calc+ "/20 !");
if (calc >= 10) {
    alert("vous passez")
} else {
    alert("vous redoublez")
}