class Person{
    nom = "";
    prenom = "";
    age = 0;

    courir(){
        return "mr" + this.nom + "sait courir..";
    }
    affichage(){
        return "nom " +this.nom+ " prenom " +this.prenom+ " age " + this.age;
    }
}

var pers1 = new Person();
pers1.nom = "toto";
pers1.prenom = "tata";
pers1.age = 50;
console.log(pers1.affichage());

class Compte{
    // numero = 0;
    // solde = 0;
    constructor(n,s){
        console.log("Appel du constructeur");
        this.numero = n;
        this.solde = s;
    }
    affichage(){
        return "Numero: " + this.numero + " Solde: " + this.solde;
    }

    retrait(montant){
        this.solde -= montant;
        return this.solde;
    }

    versement(montant){
        this.solde += montant 
        return this.solde;
    }
}

var c1 = new Compte();//
c1.numero = 001;
c1.solde = 100;
console.log(c1.affichage());

var c2 = new Compte( 002, 200);
console.log(c2.affichage());

c1.retrait(50);
c1.versement(200);

console.log(c1.affichage());