// importation du fichier importDestructuration
import {
    arrayData as pays,
    somme
} from './importDestructuration.js';

// importation d'une class
import Voiture from './importClass.js';

// Décomposition pour des objets

const person = { nom: "Peter", age: 58, adresse: { numero: 2, rue: "Rue Victor", ville: "Paris" } };

console.log(person.age);

const { nom, age } = person;
console.log(nom)

console.log(person.adresse.numero);

const { numero, rue, ville } = person.adresse;
console.log(numero);

// Décomposition pour un tableau

const tab = [15, 36, 19, 84, 65];
console.log(tab[0]);
const [age1, age2, age3, age4, age5] = tab;
console.log(age1);

// Spread operator tableau
const data = [25, 36, 95, 67, 84];
const data1 = [2, 7];
let data2 = [];
data2 = [...data, ...data1, 5, 8];
console.log(data2);
console.log(data);
console.log(...data);

//Spread operator objet

let voiture = { marque: 'Toyota', annee: 2006, modele: 'Yaris' };
let v = {};
v = {...voiture, pays: "Italie" };
console.log(v);

// Spread operator rest

const num = [25, 36, 19, 59, 69, 17];
const [a1, a2, a3, ...reste] = num;
console.log(a1, a2, a3);
console.log(...reste);

// ...params nous permet mettre autant de parametre voulu et c'est un tableau

function add(...params) {
    let res = 0;
    for (let n of params) {
        res += n;
    }
    return res;
}

let total = add(2, 3);
console.log(total);

// Arrow function

function salut() {
    return 'Hello World';
}

// const salutation = (name) => {
//     return `Hello ${name}`;
// }

// parametre name 

const salutation = name => `Hello ${name}`;

console.log(salutation("Julien"));
document.body.append(salutation('Julien'));
console.log(pays);

// Fonction somme importé 

const resutltat = somme(5, 6);
console.log(resutltat);

// Class importé

const v1 = new Voiture("Tesla", 'S', 'Grise');
console.log(v1);
document.querySelector('div').innerHTML = v1.affichage();