function calc(nombre1 = 0, nombre2 = 0, operateur){
    if(operateur == '+')
        nombre1 = nombre1 + nombre2
    else if(operateur == 'x'){
        if(nombre1 == 0|| nombre2 == 0){
            alert("Erreur, pas de multiplication par zéro");
            return("!");}
        nombre1 = nombre1 * nombre2
    } 
    else if(operateur == '-')
        nombre1 = nombre1 - nombre2
    else if(operateur == '/'){
        if(nombre1 == 0|| nombre2 == 0){
            alert("Erreur, pas de division par zéro");
            return("!");}
        nombre1 = nombre1 / nombre2
    } 
    else if(operateur == '%')
        nombre1 = nombre1 % nombre2;
    else {
        alert("Erreur, votre opérateur est faux")
        return("!");
    }
    return(nombre1);
}

function main()
{
    var input1 = document.getElementById('nbr1');
    var input2 = document.getElementById('nbr2');
    var nombre1 = parseFloat(input1.value) ;
    var operateur = opinp.value;
    var nombre2 = parseFloat(input2.value) ;
    var res = 0;

    if(isNaN(nombre1) || isNaN(nombre2)) {
        alert("erreur, un des nombres est faux");
        return(0);
    }
    res = calc(nombre1, nombre2, operateur);

    if(res == "!")
        return(0);
        
    result.value = res;        
    return 0;
}
var input1 = document.getElementById('nbr1');
var input2 = document.getElementById('nbr2');
var result = document.getElementById('res');
var op = "";
var opinp = document.getElementById('op');



// Event
var mybutton1 = document.getElementById('fois')
var mybutton2 = document.getElementById('div')
var mybutton3 = document.getElementById('moins')
var mybutton4 = document.getElementById('mod')
var mybutton5 = document.getElementById('plus')
var mybutton6 = document.getElementById('eg')
var mybutton7 = document.getElementById('ce')
mybutton1.addEventListener('click', function(){
    var op = "x";
    opinp.value = op;
});
mybutton2.addEventListener('click', function(){
    var op = "/";
    opinp.value = op;
});
mybutton3.addEventListener('click', function(){
    var op = "-";
    opinp.value = op;
});
mybutton4.addEventListener('click', function(){
    var op = "%";
    opinp.value = op;
});
mybutton5.addEventListener('click', function(){
    var op = "+";
    opinp.value = op;
});
mybutton7.addEventListener('click', function(){
    input1.value = "Nombre 1";
    input2.value = "Nombre 2";
    opinp.value = "";
    result.value = "";
});
mybutton6.addEventListener('click', main);

//hide calc
input1.onfocus = function(){
    if(input1.value == "Nombre 1"){
        input1.value = "";
    };
};

input1.onblur = function(){
    if(input1.value == ""){
        input1.value = "Nombre 1";
    }
}

input2.onfocus = function(){
    if(input2.value == "Nombre 2"){
        input2.value = "";
    };
};

input2.onblur = function(){
    if(input2.value == ""){
        input2.value = "Nombre 2";
    }
}
