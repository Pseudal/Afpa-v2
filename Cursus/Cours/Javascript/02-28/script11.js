const xhr = new XMLHttpRequest();

xhr.open("GET","https://reqres.in/api/users");
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
        text +=`
        <div class="card col-3 m-1">
        <img src="${donnees[i].avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${donnees[i].last_name} ${donnees[i].first_name}</h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">${donnees[i].email}</a>
        </div>
      </div>`;
    }
    document.querySelector('.row').innerHTML = text;
}