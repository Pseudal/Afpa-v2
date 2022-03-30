function clic(){
    var i = 0;    
    var tab = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    while(i < 7){
        var li = document.createElement("li")
        li.innerHTML = tab[i]
        document.getElementById("ici").appendChild(li)
        i++;
    }

}

var mybutton = document.getElementById('btn')

mybutton.addEventListener('click', clic);

