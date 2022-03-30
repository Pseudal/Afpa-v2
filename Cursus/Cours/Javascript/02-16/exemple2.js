// var x = "2"; var y = "5";
// var xe = Number(x);
// var ye = Number(y);
// console.log(xe + ye);

var x = "2"; var y = "toto";
var xe = Number(x);
var ye = Number(y);

if (isNaN(xe)||isNaN(ye)){
    console.log("pas des nombres");
}
else
    console.log(xe + ye);

var a = 2.6, b = 5, c = 26;
var grand = Math.max(a, b, c);
console.log(grand);
var grand = Math.min(a, b, c);
console.log(grand);
var conv = Math.round(a);
console.log(conv);
var infsup = Math.floor(a);
console.log(infsup);
var infsup = Math.ceil(a);
console.log(infsup);
var pi = Math.PI;
console.log(pi);

var today = new Date();
var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
console.log(days[today.getDay()]);
console.log(today.getMonth() + 1);
console.log(today.getFullYear());
console.log(today.getHours());

console.log("C'est joli dans cette ville : \"Paris\" ");

var phrase = "il fait super beau";
console.log(phrase);
phrase = phrase.replace('super', 'pas');
console.log(phrase);