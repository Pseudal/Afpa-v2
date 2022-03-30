var add = document.getElementById('add');

var i = 0;
var stock = 0;
var stock2 = 0;
var calc = 0;
var s1 = document.getElementById('s1')
var s2 = document.getElementById('s2')

function list(){
    var article = document.getElementById('Article').value;
    var prixtxt = document.getElementById('Prix').value;
    var nbr1 = parseFloat(prixtxt)
    var p = document.createElement('p')
    var p2 = document.createElement('p')
    p.innerHTML = article;
    p2.innerHTML = nbr1+"€";
    s1.appendChild(p);
    s2.appendChild(p2);

}

function moyenne(nbr1){
    var prix = document.getElementById('Prix').value;
    var nbr1 = parseFloat(prix)
    var moy = document.getElementById('moy');
    stock = stock + nbr1;
    moy.value = stock / i+" €" ;
}
function Prix(nbr1){
    var prix = document.getElementById('Prix').value;
    var nbr1 = parseFloat(prix);  
    var res = document.getElementById('res');
    stock2 = stock2 + nbr1;
    res.value = stock2+" €";
}

function main(){
    i++;   
    list();
    moyenne();
    Prix();
    var article = document.getElementById('Article');
    var prixtxt = document.getElementById('Prix');
    article.value = "";
    prixtxt.value = "";

}

add.addEventListener('click', main);