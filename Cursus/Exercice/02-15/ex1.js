function ex1(){
var i = 0;
var personnes = [
    {nom : "Durand", prenom : "Simon", age :42},
    {nom : "Cand", prenom :"John", age :67},
    {nom : "Lemon", prenom :"Eloi", age :23},
    {nom : "Tanguy", prenom :"Edith", age : 45}
    ];
    
    while ( i  < personnes.length ) {
        console.log(" nom : " +personnes[i].nom+ " prenom : " +personnes[i].prenom+ " age : " +personnes[i].age);
        i++;   
    }
}

function ex2() {
    var test = 0;
    var i = 0;
    var erreur = "!";
    var stock = 0;
    var tab = [];
    while(i < 6){
        test = test+5;
        stock = test;//parseInt(prompt("rentrez un nombre" + (i+1)+"/6");
        tab.push(stock);
        i++;
    }
    console.log("fini")

    stock = 7;//parseInt(prompt("testez un nombre"))
    for (var j = 0; j< tab.length; j++) {
        if (stock == tab[j]){
            erreur = 0;
            console.log("Votre nombre est dedans!");
            break;
        }
    }
    if (erreur == "!")
        console.log("Erreur, le nombre n'est pas dedans");
    console.log("moyenne des nombres :" +((tab[0] + tab[1] + tab[2] + tab[3] + tab[4] + tab[5]) / 6));
}

ex1();