var title = document.querySelector('h1');
var para1 = document.querySelector('#p1')
var para2 = document.querySelector('.para2')
var t1 = document.querySelector('#t1')
var t2 = document.querySelector('#t2')
var paras = document.querySelectorAll('p')
title.style.color = "blue";
title.style.backgroundColor = "red"

t1.addEventListener('click', function(){
    document.body.style.backgroundColor = "grey";
})
t2.addEventListener('click', function(){
    document.body.style.backgroundColor = "white";
})

paras[2].className ="bg-warning" 