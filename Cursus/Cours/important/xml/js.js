const dataXml = `<?xml version="1.0" encoding="utf-8"?>
            <magasin>
                <produit>
                    <reference>001</reference>
                    <nom>PS5</nom>
                    <prix>500</prix>
                    <disponible>Disponible</disponible>
                </produit>
                <produit>
                    <reference>002</reference>
                    <nom>XBOX</nom>
                    <prix>499</prix>
                    <disponible>Indisponible</disponible>
                </produit>
                <produit>
                    <reference>003</reference>
                    <nom>Voiture</nom>
                    <prix>25000</prix>
                    <disponible>Disponible</disponible>
                </produit>
                <produit>
                    <reference>004</reference>
                    <nom>Station Spatiale</nom>
                    <prix>500B</prix>
                    <disponible>Indisponible</disponible>
                </produit>
            </magasin>`; 

let parseur = new DOMParser();
let docXml = parseur.parseFromString(dataXml, "text/xml")
let products = docXml.getElementsByTagName('produit');
console.log(products);
let txt = "";
for(let i = 0; i < products.length; i++){
    txt +=`
    <div class="card border-secondary m-3 col-5">
    <div class="card-header">Produit n°${products[i].children[0].innerHTML}</div>
    <div class="card-body text-secondary">
        <h5 class="card-title">${products[i].children[1].innerHTML}</h5>
        <p class="card-text">${products[i].children[2].innerHTML}€</p>
        <p class="card-text">${products[i].children[3].innerHTML}</p>
    </div>
    </div>`;
}

document.querySelector('aside').innerHTML = txt;