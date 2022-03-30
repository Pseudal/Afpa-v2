class Voiture {
    constructor(marque, modele, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
    }

    affichage() {
        return `<ul><li>Marque: ${this.marque}</li><li>Modèle: ${this.modele}</li><li>Couleur: ${this.couleur}</li></ul>`;
    }
}

export default Voiture;