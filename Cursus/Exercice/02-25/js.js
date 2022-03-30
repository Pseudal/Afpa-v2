let button = document.querySelector('button')
let id = "";
let result = "";
let ok = document.querySelector('#ok')
let error = document.querySelector('#error')

 function chercher(){
    let txt = "";
    id = document.querySelector('input').value;
     for(let i = 0; i < result.colis.length; i++){
        if(id == result.colis[i].id){
            txt = `<p>${result.colis[i].status}</p>`
            document.querySelector('#ici').innerHTML = txt;
            error.style.display = "none"
            ok.style.display = "block"
            id = "";
            return;
            }
        }
    ok.style.display = "none"
    error.style.display = "block"
}

function main(){
     const xhr = new XMLHttpRequest();
     xhr.open('GET', "data.json", true);
     xhr.send(null);

     xhr.onreadystatechange  = function(){
         if(xhr.readyState == 4 && xhr.status == 200){
            result = JSON.parse(xhr.responseText);
            chercher()
         }
     }
 }
button.addEventListener('click', main)