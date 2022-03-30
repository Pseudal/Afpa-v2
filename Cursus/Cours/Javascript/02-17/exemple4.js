var res1 = prompt("réponse1");
var res2 = prompt("réponse2");
var p1 = document.createElement('p');
var p2 = document.createElement('p');
p1.innerHTML = res1;
p2.innerHTML = res2;


document.getElementsByTagName('h2')[0].appendChild(p1);
document.getElementsByTagName('h2')[1].appendChild(p2);




var p2 = document.getElementsByClassName('para')[0];
var title = document.createElement('h3');

