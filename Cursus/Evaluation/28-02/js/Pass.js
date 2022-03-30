let login = document.querySelector('#login');
let mdp = document.querySelector('#mdp');
let error = document.querySelector('#error');
let form = document.getElementsByTagName('form')[0]

let regLogin = /[a-z]{2,6}/;
let regPass = /([a-zA-Z0-9]){5}[*#/]{1}/;


form.onsubmit = function(e){
    e.preventDefault();
    if(!regLogin.test(login.value) || login.value.length > 6 || login.value !="admin"){
        error.innerHTML = '<p class="text-center alert alert-danger">Login invalide</p>';
        return false;
    }else if(!regPass.test(mdp.value) ||mdp.value != "aaAA5*"){
        error.innerHTML = '<p class="text-center alert alert-danger">Mot de passe invalide</p>';
        console.log("mot de passe invalide");
        return false;
    }else{ 
        let secret = Math.random().toString(36).slice(-8);
        sessionStorage.setItem('token', secret);
        location.href = "Admin.html";
       
    }
}