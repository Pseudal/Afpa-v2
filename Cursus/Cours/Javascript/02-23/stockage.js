let nom = "Julien";

// Crér une donnée et la stocké dans le localstorage
localStorage.setItem("name", nom);
localStorage.setItem("nickname", "Number 1");

// Récupéré la donnée 
console.log(localStorage.getItem("name"));

// Récupérer la donnée et l'affiché dans le html
document.getElementById('key').innerHTML = localStorage.getItem('name');

// Supprimer une donnée
localStorage.removeItem(nom);

// clear() pour supprimer/nettyer toutes les données stocker
localStorage.clear();


let data = document.cookie = "name=Peter, max-age=+5";
console.log(document.cookie);
const dataArray = data.split('=')
console.log(dataArray[1]);
console.log(document.cookie);

//fonction "map"
////
const tab = [12, 15, 50, 22]; 
// for(let i = 0; i < tab.length; i++){
//     tab[i] = tab[i] + 6; 
// }
//console.log(tab);
let tab2 = tab.map((t)=>{
    return t + 6;
});
console.log(tab2)