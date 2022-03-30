let button2 = document.querySelector('#a2')
let button3 = document.querySelector('#a3')
let button1 = document.querySelector('#a1')
let admin = document.querySelector("#admin")
let result = document.querySelector('main')
let head = document.querySelector('#test')
let title = document.querySelector("#title")

function remplir(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/article.json", true);
    xhr.send(null);

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            const users = JSON.parse(xhr.responseText);
            console.log(users);
            affichage(users.data);
        }
    }

    const affichage = (donnees) =>{
        let text = "";
        for(let i = 0; i < donnees.length; i++){
            text +=`            
            <section class="s1">
            <img width="200px" src="${donnees[i].img}" alt="MaPhoto">
            <article>
                <div>
                    <h2>Nom de l'oeuvre: ${donnees[i].nom}</h2>
                    <p class="desc">Paruption: ${donnees[i].paruption}</p>
                </div>                   
                <p>${donnees[i].description}</p>
            </article>        
        </section>`;
        }
        document.querySelector("main>section").innerHTML = text;
    }
}

function port(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/Portfolio.html", true);
    xhr.send(null);
    head.setAttribute("href", "./CSS/Portfolio.css");
    document.querySelector("main>section").innerHTML = "";
    let i = 1155;
    const animationStart = setInterval(anim, 4)
    function anim(){
        if(i <= 400){
            document.querySelector("main>section").innerHTML =`
            <div id="whirly" >
                <div class="whirly-loader">
                Loading...
                </div>
            </div>`            
        }        
        if(i <= 200){
            clearInterval(animationStart);            
        }
        i -= 11
        document.querySelector("main>section").style.width = `${i}px`
        document.querySelector("main>section").style.height = `${i}px`
    }

    setTimeout(animationend, 1350)
    function animationend(){
        document.querySelector("main>section").innerHTML = "";
        const animationEnd = setInterval(anim, 4)
        function anim(){
            if(i >= 400){
                document.querySelector("main>section").innerHTML =``            
            }  
            if(i >= 1155){
                clearInterval(animationEnd);            
            }
            i += 11
            document.querySelector("main>section").style.width = `${i}px`
            document.querySelector("main>section").style.height = `${i}px`
        }   
    }

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            setTimeout(set, 1750)   
            function set(){
            result.innerHTML = xhr.responseText
            title.innerText = "A propos"              
            }         
        }
    }
}
function home(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/Home.html", true);
    xhr.send(null);
    head.setAttribute("href", "./CSS/Home.css"); 
    document.querySelector("main>section").innerHTML = "";
    let i = 1155;
    const animationStart = setInterval(anim, 4)
    function anim(){
        if(i <= 400){
            document.querySelector("main>section").innerHTML =`
            <div id="whirly" >
                <div class="whirly-loader">
                Loading...
                </div>
            </div>`            
        }        
        if(i <= 200){
            clearInterval(animationStart);            
        }
        i -= 11
        document.querySelector("main>section").style.width = `${i}px`
        document.querySelector("main>section").style.height = `${i}px`
    }

    setTimeout(animationend, 1350)
    function animationend(){
        document.querySelector("main>section").innerHTML = "";
        const animationEnd = setInterval(anim, 4)
        function anim(){
            if(i >= 400){
                document.querySelector("main>section").innerHTML =``            
            }  
            if(i >= 1155){
                clearInterval(animationEnd);            
            }
            i += 11
            document.querySelector("main>section").style.width = `${i}px`
            document.querySelector("main>section").style.height = `${i}px`
        }   
    }

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            setTimeout(set, 1750)   
            function set(){
            result.innerHTML = xhr.responseText
            title.innerText = "Home"
            remplir();                 
            }     
        }
    }
}
function cont(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/Contact.html", true);
    xhr.send(null);
    head.setAttribute("href", "./CSS/Contact.css"); 
    document.querySelector("main>section").innerHTML = "";
    let i = 1155;
    const animationStart = setInterval(anim, 4)
    function anim(){
        if(i <= 400){
            document.querySelector("main>section").innerHTML =`
            <div id="whirly" >
                <div class="whirly-loader">
                Loading...
                </div>
            </div>`            
        }        
        if(i <= 200){
            clearInterval(animationStart);            
        }
        i -= 11
        document.querySelector("main>section").style.width = `${i}px`
        document.querySelector("main>section").style.height = `${i}px`
    }

    setTimeout(animationend, 1350)
    function animationend(){
        document.querySelector("main>section").innerHTML = "";
        const animationEnd = setInterval(anim, 4)
        function anim(){
            if(i >= 400){
                document.querySelector("main>section").innerHTML =``            
            }  
            if(i >= 1155){
                clearInterval(animationEnd);            
            }
            i += 11
            document.querySelector("main>section").style.width = `${i}px`
            document.querySelector("main>section").style.height = `${i}px`
        }   
    }

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            setTimeout(set, 1750)   
            function set(){
            result.innerHTML = xhr.responseText
            title.innerText = "Contact"             
            }         
        }
    }
   
}

function adminpass(){
    location.href = "admin.html"
}
button1.onclick = function(){home()};
button2.onclick = function(){port()};
button3.onclick = function(){cont()};
admin.onclick = function(){adminpass()};