class Person{
    constructor (nom, prenom){
       this.n = nom;
       this.p = prenom;
   }
   affichage(){
       return `Nom: ${this.n} et Prénom: ${this.p};`
   }
}

export default Person;