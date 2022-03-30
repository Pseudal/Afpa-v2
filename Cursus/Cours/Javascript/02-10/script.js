//var nom;
//var prenom;
var a = prompt("a");
var b = prompt("b");
var c;
var ex1 = 5, ex2 = 10; //j'ai le droit de déclarer comme ça
//nom = "toto";
var n1, n2;
n1 = parseInt(a);//pour convertir un string en int
n2 = parseInt(b);
// a++; existe

//console.log(nom);
//alert("hello world");
//nom = false;
//prenom = prompt("votre prenom");
//console.log (typeof(nom));
//console.log("hello");
//console.info("hello");
//console.debug("hello");
//console.warn("hello");
//console.error("hello");
c = n1 + n2;
alert(c);

var amount;
amount = 200;
if (amount > 100) {
    alert("wow t'es riche");
}
else{
    alert("pauvre")
}

var trafic_light;
trafic_light = prompt("De quel couleur est le feu ?").toLowerCase();

switch (trafic_light) {
    case "green":
        alert("go");
        break;
    case "orange":
        alert("go mais pas trop");     
        break;
    case "red":
        alert("pas go");       
        break;
    default:
        alert("au pif");
        break;
}

for(var i = 0; i < 10; i++){
    console.log(i);
    if (i == 5) {
        break;
    }
}
for(var i = 0; i < 10; i++){
    console.log(i);
    if (i == 5) {
        continue;
    }
}