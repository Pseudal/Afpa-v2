let data = '{"nom": "Dupond", "Prenom": "Thomas", "Age": "25"}';
console.log(data);
let dataParse = JSON.parse(data)
console.log(dataParse.nom);
let data2 = {"nom": "Dupond", "Prenom": "Thomas", "Age": "25"};
console.log(data2);
//////////////////////////////////////////////////

const xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.send(null);

xhr.onreadystatechange  = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        const result = JSON.parse(xhr.responseText);
        console.log(result[0]);
        affichage(result)
    }
}

const affichage = (products) => {
    txt = "";
    for(let i = 0; i < products.length; i++){
        txt +=`
        <div class="card border-secondary m-3 col-5">
        <div class="card-header">Produit n°${products[i].reference}</div>
        <div class="card-body text-secondary">
            <h5 class="card-title">${products[i].nom}</h5>
            <p class="card-text">${products[i].prix}€</p>
            <p class="card-text">${products[i].disponible}</p>
        </div>
        </div>`
    }
    setTimeout(() => {
      document.querySelector("aside").innerHTML = txt  
    }, 5000)   
}

