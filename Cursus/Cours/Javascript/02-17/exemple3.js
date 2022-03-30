var para1 = document.getElementById("first");
para1.setAttribute("align", "right");
// console.log(para1.tagname);
// console.log(para1.nodeType);
// console.log(para1.nodeValue);
// console.log(para1.nodeName);
// console.log(para1.childNodes);
// console.log(para1.childNodes.length);

var paras = document.getElementsByTagName('p');
console.log(paras.length);

var para2 = document.getElementsByClassName('para');
console.log(para2[0].innerHTML);

var title = document.getElementsByTagName('h2');
title[0].setAttribute('align', 'center');
title[0].innerText = " le nouveau h2";
console.log(title[0].innerText);
title[0].innerHTML = " <u>le nouveau h2 </u>";

var li = document.getElementsByTagName('li');
li[2].innerHTML = "modifié";
//version chiante
var ul = document.getElementsByTagName('ul');
ul[0].children[1].innerHTML = "version chiante";
ul[0].setAttribute('class', 'bleu');

var title2 = document.createElement('h2');
var texti = document.createElement('i');
title2.innerHTML = "mon texte h2";
texti.innerHTML= "ceci est en italic";
document.getElementsByTagName('div')[0].appendChild(title2);
document.getElementsByTagName('div')[0].appendChild(texti);

var textcontent = document.createTextNode('ceci est un texte créé')
var textimportant = document.createElement('strong')
textimportant.appendChild(textcontent);
document.getElementsByTagName('p')[1].appendChild(textimportant);