function main(){
    var taille = parseInt(prompt("taille du pas carré?"));
    var NbrEtoiles = 0;
    var total = 0;
    var i = 0;
    var string = ''; var tab = [];
    
    if(isNaN(taille) || (taille <= 0)) {
        alert("erreur");
        return;
    }

    total = taille * taille;
    while(i != taille) {
        i++;      
        if (NbrEtoiles == total) { 
            alert("voila le pas carré")      
            alert(tab.join('\n'));
            return; 
        } 
        else if (i == taille) {
            i = 0;            
            NbrEtoiles++;  
            string += '*';
            tab.push(string);            
            string = '';  
        } 
        else {
            NbrEtoiles++;
            string += '*';
        }
    }
}
main();