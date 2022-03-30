const xhr = new XMLHttpRequest();

xhr.open("GET","article.json");
xhr.send();

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4 && xhr.status == 200){
        const users = JSON.parse(xhr.responseText);
        console.log(users.data);
        affichage(users.data);
    }
}
const affichage = (donnees) =>{
    let text = "";
    for(let i = 0; i < donnees.length; i++){
        text +=`<tr>
                    <td>${donnees[i].nom}</td>
                    <td>${donnees[i].paruption}</td>
                    <td>${donnees[i].description}</td>
                    <td><img src=${donnees[i].img} alt="" /></td>
                    <td>
                        <a href="" class="btn btn-success">Editer</a>
                        <a href="" class="btn btn-danger">Supprimer</a>
                    </td>
                </tr>`;
    }
    document.querySelector('tbody').innerHTML = text;
}


if(!localStorage.getItem('token'))
    location.href = "Pass.html";

document.querySelector('#decon').onclick = function(){
    localStorage.removeItem("token")
    location.href = "Pass.html"
}