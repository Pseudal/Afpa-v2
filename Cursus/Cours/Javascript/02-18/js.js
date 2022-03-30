var fieldObject = document.getElementById('field');
fieldObject.onfocus = function(){
    if(fieldObject.value == "saisir ici"){
        fieldObject.value = "";
        fieldObject.classList.add("form-control", "danger")//sert à ajouter des class bootstrap
    };
};

fieldObject.onblur = function(){
    if(fieldObject.value == ""){
        fieldObject.value = "saisir ici";
        fieldObject.classList.remove("danger", "form-control")
    }
}