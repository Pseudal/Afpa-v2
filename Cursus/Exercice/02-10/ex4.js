function main(){
var agep = prompt("Quel age avez vous ?")
var Ptp = prompt("depuis combient de temps avez vous votre permis ?")
var Atp = prompt("depuis combient de temps êtes vous chez nous ?")
var accp = prompt("Combien d'accident avez vous eu ?")

age = parseInt(agep);
Pt = parseInt(Ptp);
At = parseInt(Atp);
acc = parseInt(accp);

if(Pt < 2 && age < 25){
    if(acc > 0){
        return;
    }
    else if(At >= 5){
        alert("évolu en orange");
        return;
    }
    alert("bienvenue avec tarif rouge");
    return;
}

else if(Pt >= 2 && age < 25 || age >= 25 && Pt < 2){
    if(acc == 0){
        if(At >= 5){
            alert("évolu en vert");
            return;
        }
        alert("tarif orange");
        return;
    }
    else if(acc == 1){
        if(At >= 5){
            alert("évolu en orange");
            return;
        }
        alert("tarif rouge");
        return;
    }
    else if(acc > 1){
        alert("dégage");
        return;
    }
}

else if(Pt >= 2 && age >= 25){
    if(acc == 0){
        if(At >= 5){
            alert("évolu en bleu");
            return;
        }
        alert("tarif vert");
        return;
    }
    else if(acc == 1){
        if(At >= 5){
            alert("évolu en vert");
            return;
        }
        alert("tarif orange");
        return;
    }
    else if(acc == 2){
            if(At >= 5){
                alert("évolu en orange");
                return;
        }
        alert("tarif rouge");
        return;
    }
    else{
        alert("dégage");
        return;
    }
}
else{
    alert("cas impossible");
    return;
}
return
}

main()