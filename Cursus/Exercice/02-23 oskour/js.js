let tab = [];
let yena = ""
let i = 0;
let marqueinp = document.querySelector("#marque")
let modeleinp = document.querySelector("#modele")
let couleurinp = document.querySelector("#couleur")
let yenainp = document.querySelector("#yena")
let sub = document.querySelector("#sub")
let table = document.querySelector('table')
let ici = document.querySelector("#ici")
let get = document.querySelector('#get')


function obj(marque, modele, couleur, yena) { //3
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
    this.yena = yena;
}

function retrouver(){
    if(tab.length != 0)
        return;
    let tabget = JSON.parse(localStorage.getItem('voiture'));
    for (let j = tabget.length-1; j != -1 ; j--) {
        let row = table.insertRow(i + 1);
        row.insertCell(0).innerHTML = tabget[j].marque;
        row.insertCell(1).innerHTML = tabget[j].modele;
        row.insertCell(2).innerHTML = tabget[j].couleur;
        row.insertCell(3).innerHTML = tabget[j].yena;
   }
    i = tabget.length;
    tab = tabget;
}

function remplir(){ //2
    let row = table.insertRow(i + 1);
    row.insertCell(0).innerHTML = tab[i].marque;
    row.insertCell(1).innerHTML = tab[i].modele;
    row.insertCell(2).innerHTML = tab[i].couleur;
    row.insertCell(3).innerHTML = tab[i].yena;
    localStorage.setItem("voiture", JSON.stringify(tab));
    console.log(); 
    i++;
}

function main(){ //1
    if(marqueinp.value == "" || modeleinp.value == "" || couleurinp.value ==""){
        alert("erreur, remplissez tout les champs")
        return;
    }
    if(yenainp.checked){
        yena = "Oui"
    }
    else
        yena = "non"
    let Nobj = new obj(marqueinp.value, modeleinp.value, couleurinp.value, yena);
    tab.push(Nobj)
    remplir();
    marqueinp.value = ""; modeleinp.value = ""; couleurinp.value = ""; yenainp.checked = false;
}

get.addEventListener('click', function(e){
    e.preventDefault();
    retrouver();
});
sub.addEventListener('click', function(e){
    e.preventDefault();
    main();
});