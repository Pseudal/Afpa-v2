class Person{
    constructor(nom, prenom){
        this.n = nom;
        this.p = prenom;
    }

    affichage(){
        return `Nom: ${this.n} et Prénom: ${this.p}`;
    }
}
//instance de classe Person ou objet créé à partir de classe Person
const pers1 = new Person("Dupont", "Antoine");
console.log(pers1.affichage());

class Stagiaire extends Person{
    constructor(nom, prenom, immatriculation, formation){
        //appel des membres
        super(nom, prenom);
        this.im = immatriculation;
        this.form = formation;
    }

    affichage(){
        //return`Immatriculation: ${this.im} - Formation: ${this.form}`;
        return `${super.affichage()} Immatriculation:${this.im} - Formation: ${this.form}` ;
    }
}

const stag1 = new Stagiaire('125412', 'Dwwm');
console.log(stag1.affichage());

const stag2 = new Stagiaire("Durand","Claire","256421", "Tai");
console.log(stag2.affichage());