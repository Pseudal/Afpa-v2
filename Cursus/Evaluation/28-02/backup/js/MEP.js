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
        document.querySelector('#ici').innerHTML = text;
    }
}

function port(){
    result.innerHTML =`
    <div id="whirly" >
        <div class="whirly-loader">
	    Loading...
        </div>
    </div>`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/Portfolio.html", true);
    xhr.send(null);

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            setTimeout(set, 2000)   
            function set(){
            result.innerHTML = xhr.responseText
            head.setAttribute("href", "./CSS/Portfolio.css");
            title.innerText = "A propos"              
            }         
        }
    }
}
function home(){
    result.innerHTML =`
    <div id="whirly" >
        <div class="whirly-loader">
	    Loading...
        </div>
    </div>`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/Home.html", true);
    xhr.send(null);

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            setTimeout(set, 2000)   
            function set(){
            result.innerHTML = xhr.responseText
            head.setAttribute("href", "./CSS/Home.css"); 
            title.innerText = "Home"
            remplir();                 
            }     
        }
    }
}
function cont(){
    result.innerHTML =`
    <div id="whirly" >
        <div class="whirly-loader">
	    Loading...
        </div>
    </div>`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./ressources/Contact.html", true);
    xhr.send(null);

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            setTimeout(set, 2000)   
            function set(){
            result.innerHTML = xhr.responseText
            head.setAttribute("href", "./CSS/Contact.css"); 
            title.innerText = "Contact"             
            }         
        }
    }
}
function adminpass(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "admin.html", true);
    xhr.send(null);

    xhr.onreadystatechange  = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            location.href = "admin.html"
        }
    }
}
button1.onclick = function(){home()};
button2.onclick = function(){port()};
button3.onclick = function(){cont()};
admin.onclick = function(){adminpass()};