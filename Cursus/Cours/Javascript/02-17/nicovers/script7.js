var res1 = prompt("Entrez la réponse de la question1");
var p1 = document.createElement('p');
if(res1.toLocaleLowerCase() == "paris"){
    p1.setAttribute("class", "green");
    p1.innerHTML = "v " + res1;
}else{
    p1.setAttribute("class", "red");
    p1.innerHTML = "x " + res1;
    
}

document.getElementById('div1').appendChild(p1);