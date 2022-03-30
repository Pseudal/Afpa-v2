var tabimage = ["image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.jpg", "image/5.jpg"];
var compteur = 0;
var myimage = document.getElementById('img');

function funct() {
    myimage.setAttribute("src", tabimage[compteur]);
    compteur++;
    if(compteur >= tabimage.length){
        compteur = 0;
    }
}
//setInterval(funct, 2000);

var pathinternal = setInterval(funct, 2000)

myimage.onmouseover = function(){
    clearInterval(pathinternal)
}
myimage.onmouseout = function(){
    pathinternal = setInterval(funct, 2000)
}
