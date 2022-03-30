var form = document.getElementById('form');
var login = document.getElementById('login')
var pass = document.getElementById('pass')
var error = document.getElementById('error');

form.onsubmit = function(){
    if(login.value === ""){
        error.innerHTML = "login incorect"
        error.classList.add("alert", "alert-danger", "text-center")
        return false;
    }
    else if(mdp.value.length <= 7){
        error.innerHTML = "<b>8 caractère minimum</b>"
        error.classList.add("alert", "alert-danger", "text-center")
        return false;
    }
    else
        return true;
}