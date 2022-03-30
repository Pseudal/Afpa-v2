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

