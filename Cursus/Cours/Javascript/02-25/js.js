const xhr = new XMLHttpRequest;

xhr.open('GET', "data.xml", true);
xhr.send(null);

xhr.onreadystatechange  = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.responseXML
        console.log(response.getElementsByTagName('produit'));
        affichage(response)
    }
}

const affichage = (res) =>{
    let data = res.getElementsByTagName('produit')[0].children
    let txt = "<ul>";
    for(let i = 0; i < data.length; i++){
        txt+=`<li>${data[i].innerHTML}</li>`
    }    
    txt += "</ul>"
    console.log(data);
    document.body.innerHTML = txt
}