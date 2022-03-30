import Voiture from "./importClass.js";

var marque = document.querySelector("#marque");
var modele = document.querySelector("#modele");
var pays = document.querySelector("#pays");
var check = document.querySelector('#dispo');
var button = document.querySelector('input:last-child');
var voiture = [];
var compte = 0;

button.onclick = function() {
    var getMarque = marque.value;
    var getModele = modele.value;
    var getPays = pays.value;
    voiture[compte] = createVoiture(getMarque, getModele, getPays);
    compte++;
    console.log(voiture[compte]);
    console.log(compte);
    localStorage.setItem(compte, voiture[compte]);
};

function createVoiture(ma, mo, p) {
    var create = new Voiture(ma, mo, p)
    return create;
}

var v1 = createVoiture('Audi', 'A4', 'France');
console.log(v1);