// var mybutton = document.getElementById('btn');
// mybutton.onclick = function(){
//     alert("hello world");
// }

// var mybutton = document.getElementById('btn');
// mybutton.addEventListener('click', function(){
//     alert("hello 2");
// });
function clg(){
    var field1 = document.getElementById('champ')
    alert(field1.value);
}

function clic(){
    alert("hello world");
}


var mybutton = document.getElementById('btn')
var mybutton2 = document.getElementById('btn2')
var p1 = document.createElement('p')



mybutton.addEventListener('click', clic);
mybutton2.addEventListener('click', clg);
