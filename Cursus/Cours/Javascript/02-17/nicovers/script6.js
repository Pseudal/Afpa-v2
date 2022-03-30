var para1 = document.getElementById("first");
para1.setAttribute("align","right");
console.log(para1.childNodes.length);

var paras = document.getElementsByTagName('p');
console.log(paras.length);

var para2 = document.getElementsByClassName('para');
console.log(para2[0].innerHTML);

var title = document.getElementsByTagName('h1');
title[0].setAttribute('align', 'center');

title[0].innerText = "Le nouveau titre";
title[0].innerHTML = "<u>Le nouveau titre</u>";

console.log(title[0].innerText);

var items = document.getElementsByTagName('ul');
items[0].children[2].innerHTML = "Troisième enfant";
items[0].setAttribute('class','bleu')
console.log(items);

var links = document.getElementsByTagName('a');
links[0].setAttribute('href','https://www.afpa.fr/');

var title2 = document.createElement('h2');
var textItalic = document.createElement('i');
var divContent = document.getElementsByTagName('div')[0];
title2.innerHTML = "Mon titre de niveau 2";
textItalic.textContent = "Mon texte en italic";

divContent.prepend(textItalic);
divContent.prepend(title2);

var textContent = document.createTextNode('la feuille.');
var textImportant = document.createElement("strong");
textImportant.appendChild(textContent);
document.getElementsByTagName('p')[2].appendChild(textImportant);

var p2 = document.getElementsByClassName('para')[0];
var title3 = document.createElement('h3');
title3.textContent = "Titre de niveau 3";
divContent.insertBefore(title3,p2);

var item1 = items[0].children[0];
var item2 = items[0].children[1];
items[0].removeChild(item1);
item2.remove();