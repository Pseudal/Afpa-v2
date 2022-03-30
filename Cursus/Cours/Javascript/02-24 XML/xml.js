let dataXml = `<?xml version="1.0" encoding="utf-8"?>
<racine>
    <nom>Dupond</nom>
</racine>`;
console.log(dataXml);

//Création du parseur
const parseur = new DOMParser();
const docXml = parseur.parseFromString(dataXml, "text/xml");
console.log(docXml);
const data = docXml.getElementsByTagName('racine');
console.log(data[0].children[0].textContent);
 
let dataXml2 = `<?xml version="1.0" encoding="utf-8"?>
<person>
    <nom>PasDupond</nom>
    <prenom>Etienne</prenom>
    <age>20</age>
</person>`;
const parseur2 = new DOMParser();
const docXml2 = parseur.parseFromString(dataXml2, "text/xml");
console.log(docXml2);
const data2 = docXml2.getElementsByTagName('person');
console.log(data2[0].children[0].textContent);
console.log(data2[0].children[1].textContent);
console.log(data2[0].children[2].textContent);