const xhr = new XMLHttpRequest();
xhr.open("get", "https://reqres.in/api/users?page=2")
xhr.send();

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4 && xhr.status == 200){
        const data = JSON.parse(xhr.responseText)
        console.log(data.data);
        affichage(data.data)
    }
}

const affichage = (donnees) =>{
    let txt = "";
    for(let i = 0; i < donnees.length; i++){
        txt += `<tr><td>${donnees[i].id}</td><td>${donnees[i].email}</td><td>${donnees[i].first_name}</td><td>${donnees[i].last_name}</td><td><img src=${"donnees[i].avatar"}alt=""></td><td><a href="" class="btn">Ajouter</a><a href="" class="btn">Supprimer</a></td></tr>`
        document.querySelector('tbody').innerHTML = txt;
    }
}

let test = true
if(test){
}else{
    location.href = "C:\Users\Adrie\OneDrive\Documents\Afpa\Cursus\Cours\Javascript\02-28\match_split_etc.html"
}
