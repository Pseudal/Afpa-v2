var a = prompt("nombre1");
var op = prompt("opérateur");
var b = prompt("nombre2");

n1 = parseInt(a);//pour convertir un string en int
n2 = parseInt(b);

if(op === "+"){
    var c = n1 + n2;
    if (c > 0) {
        alert("le resultat de " +n1+" + " +n2+ " est : "+c+". C'est positif")
    }
    else if (c < 0){
        alert("le resultat de " +n1+" + " +n2+ " est : "+c+". C'est negatif")
    }
    else{
        alert("le resultat de " +n1+" + " +n2+ " est : "+c+". C'est neutre")
    }
}
else if(op === "*"){
    var c = n1 * n2;
    if (c > 0) {
        alert("le resultat de " +n1+" x " +n2+ " est : "+c+". C'est positif")
    }
    else if (c < 0){
        alert("le resultat de " +n1+" x " +n2+ " est : "+c+". C'est negatif")
    }
    else{
        alert("le resultat de " +n1+" x " +n2+ " est : "+c+". C'est neutre")
    }
}
else{
    alert("cas impossible")
}