function calc(nombre1 = 0, nombre2 = 0, operateur){
    if(operateur == '+')
        nombre1 = nombre1 + nombre2
    else if(operateur == '*'){
        if(nombre1 == 0|| nombre2 == 0){
            console.log("Erreur, pas de multiplication par zéro");
            return("!");}
        nombre1 = nombre1 * nombre2
    } 
    else if(operateur == '-')
        nombre1 = nombre1 - nombre2
    else if(operateur == '/'){
        if(nombre1 == 0|| nombre2 == 0){
            console.log("Erreur, pas de division par zéro");
            return("!");}
        nombre1 = nombre1 / nombre2
    } 
    else if(operateur == '%')
        nombre1 = nombre1 % nombre2;
    else {
        console.log("Erreur, votre opérateur est faux")
        return("!");
    }
    return(nombre1);
}

function main()
{
    var nombre1 = 0; //parseInt(prompt("1er nombre"));    
    var operateur = "-"; //prompt("opérateur ? ( / , * , - , + , % )"); 
    var nombre2 = 0; //parseInt(prompt("2eme nombre"));
    var res = 0;

    if(isNaN(nombre1) || isNaN(nombre2)) {
        console.log("erreur, un des nombres est faux");
        return(0);
    }
    res = calc(nombre1, nombre2, operateur);

    if(res == "!")
        return(0);
        
    console.log("le resultât de " +nombre1+ " " +operateur+ " " +nombre2+ " = " +res+ ".");        
    return 0;
}

main();