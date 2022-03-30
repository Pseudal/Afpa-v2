const dataXml = `<?xml version="1.0" encoding="utf-8"?>
	<magasin>
        <produit>
            <reference>052398</reference>
            <nom>Boeuf</nom>
            <prix>35€</prix>
            <dispo>Non</dispo>
        </produit>

        <produit>
            <reference>010249</reference>
            <nom>Lait</nom>
            <prix>7€</prix>
            <dispo>Oui</dispo>
        </produit>

        <produit>
            <reference>450203</reference>
            <nom>Carotte</nom>
            <prix>1,26€</prix>
            <dispo>Oui</dispo>
        </produit>

        <produit>
            <reference>367865</reference>
            <nom>Framboise</nom>
            <prix>3€</prix>
            <dispo>Oui</dispo>
        </produit>
    </magasin>
`;

const parseur = new DOMParser();
const docXml = parseur.parseFromString(dataXml, "text/xml");
const store = docXml.getElementsByTagName('magasin')[0];
const produit = docXml.getElementsByTagName('produit');
const cardHead = document.querySelectorAll('div.card-header');
const cardBody = document.querySelectorAll('div.card-body');
console.log(docXml);

let title1 = '<p>';
// for (let i = 0; i < store.children.length; i++) {
//     for (let j = 0; j < produit[j].children.length; j++) {
//         text += produit[j].children[i + 1].innerHTML;
//         console.log("ok");
//     };
// };
title1 += produit[0].children[1].textContent;
title1 += "</p>";
cardHead[0].innerHTML = title1;

let title2 = '<p>';
title2 += produit[1].children[1].textContent;
title2 += "</p>";
cardHead[1].innerHTML = title2;

let title3 = '<p>';
title3 += produit[2].children[1].textContent;
title3 += "</p>";
cardHead[2].innerHTML = title3;

let title4 = '<p>';
title4 += produit[3].children[1].textContent;
title4 += "</p>";
cardHead[3].innerHTML = title4;

let produit1 = '<p>';
produit1 += `Référence: ${produit[0].children[0].textContent}</br>Prix: ${produit[0].children[2].textContent}</br>En Stock: ${produit[0].children[3].textContent}`;
produit1 += "</p>";
cardBody[0].innerHTML = produit1;

let produit2 = '<p>';
produit2 += `Référence: ${produit[1].children[0].textContent}</br>Prix: ${produit[1].children[2].textContent}</br>En Stock: ${produit[1].children[3].textContent}`;
produit2 += "</p>";
cardBody[1].innerHTML = produit2;

let produit3 = '<p>';
produit3 += `Référence: ${produit[2].children[0].textContent}</br>Prix: ${produit[2].children[2].textContent}</br>En Stock: ${produit[2].children[3].textContent}`;
produit3 += "</p>";
cardBody[2].innerHTML = produit3;

let produit4 = '<p>';
produit4 += `Référence: ${produit[3].children[0].textContent}</br>Prix: ${produit[3].children[2].textContent}</br>En Stock: ${produit[3].children[3].textContent}`;
produit4 += "</p>";
cardBody[3].innerHTML = produit4;