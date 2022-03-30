function main(){
    var taille = parseInt(prompt("taille du triangle"));
    var NbrEtoiles = 0;
    var total = 0;
    var v = 0;
    var i = 0;
    var string = ''; var tab = [];
    
    if(isNaN(taille) || (taille <= 0)){
        alert("erreur");
        return;
    }

    while(taille != 0) {  
        if(i != v){
            while (i != v){
            string += ' ';
            i++;
            }
        }
        else{
            for (var i = 0; i < taille; i++) {
            string += '*';                  
            }
        tab.push(string); 
        v++; i = 0; taille--; string = '';  
        }
    }
    tab.reverse();
    alert("voila le pas triangle")      
    alert(tab.join('\n'));
    return; 
}
main();