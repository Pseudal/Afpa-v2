
//première methode
// $('#ici').load('./data.html', function(){
//     console.log("voila");
// })

// $.get('./data.html', function(data){
//     $('h1').atfer(data);
// })

// $.ajax({
//     method:'GET',
//     url: 'data.html',
//     success: function(data){
//         $('h1').after(data);
//         console.log(data);
//     },
//     error: function(){
//         alert('error')   
//     } 
// })

let ici = $('#ici');

setTimeout(() => {
    $('#spinner').html("")
}, 2000);

function ecrir(countrie){
    let text = '';
    countrie.map(countrie => {
        let langue = countrie.langue
        langue = langue[Object.keys(langue)[0]];
        let monnaie = countrie.monnaie
        monnaie = monnaie[Object.keys(monnaie)[0]]; 
        text += `        
        <div class="card m-3" style="width: 18rem;">
        <img src="${countrie.flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${countrie.name}</h5>
          <p class="card-text">taille: ${countrie.area} km</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">capitale: ${countrie.capital}</li>
          <li class="list-group-item">Devise: ${monnaie.name}</li>
          <li class="list-group-item">langage: ${langue}</li>
          <li class="list-group-item">région: ${countrie.region}</li>
        </ul>
      </div>`
    });
    ici.append(text)
    // ici.after(text)
}

function affichage(donnees){
    let countrie = [];
    countrie = donnees.map(donnee => {
       return(
           {name: donnee.translations.fra.official ? donnee.translations.fra.official : donnee.name.official,
           area: donnee.area,
           capital: donnee.capital ? donnee.capital[0] : 'inconnu',
           flag: donnee.flags.png,
           monnaie: donnee.currencies ? donnee.currencies : 'inconnu',
           langue: donnee.languages ? donnee.languages : 'inconnu',
           region: donnee.region
        })
    })
    ecrir(countrie);
}

$.ajax({
    method:'GET',
    url: 'https://restcountries.com/v3.1/all',
    dataType: 'json',
    success: function(data){
        affichage(data)
    },
    error: function(){
        alert('error')   
    } 
})

