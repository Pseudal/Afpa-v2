var important = document.querySelector("#important");
var pas = 0;
var stop;
//
// function animationStart(){
//     important.style.position = "absolute";
//     important.style.top = "0";
//     important.style.left = "0";
//     stop = setInterval(animationIn, 50)
// }

// function animationIn(){    
//     pas +=5;
//     important.style.left = pas + "px";  
//     if(pas >= window.innerWidth){
//         important.style.left = "";
//         important.style.stop = "";
//         important.style.position = "";
//         clearInterval(stop)
//     }
// }
// setTimeout(animationStart, 1000)

var cuicui = document.querySelector('img')
cuicui.style.position = "absolute";


function animationcuicui(){
    pas += 2.5;
    cuicui.style.left = pas + "px";    
    if(pas >= window.innerWidth){
        pas = -100;
    }   
} 
setInterval(animationcuicui, 25)

let phrase = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum, voluptas soluta eius officia corporis, q
uam perspiciatis, dolores velit consequuntur numquam fugiat a! Quidem sunt, asperiores omnis eos ipsum nesciunt beatae aperiam m
ollitia excepturi culpa rem esse minus id deserunt blanditiis enim exercitationem voluptates! Accusantium placeat architecto opt
io totam. Molestias delectus pariatur adipisci repudiandae ipsa perspiciatis corrupti, numquam necessitatibus repellat laudantium c
ommodi corporis nulla laborum, hic reiciendis, architecto harum? Id necessitatibus suscipit officiis corporis ipsum eum facere repellat duc
imus modi! Aliquid tempora consequuntur ab deleniti sequi sunt totam laboriosam dolore 
nesciunt nostrum nulla, porro inventore labore nisi. Reiciendis, iste error?`
console.log(phrase);