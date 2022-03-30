var personnes = [
    {id : 001 , nom : "Durand", prenom :"Simon",age :42},
    {id : 002, nom : "Cand", prenom : "John",age :67},
    {id : 003, nom : "Lemon", prenom : "Eloi",age :23},
    {id : 004, nom : "Tanguy", prenom : "Edith" ,age : 45}
    ];
  

    
    function createTable() {
        var headers = ["id", "nom", "prenom", "age"];
        var table = document.createElement("TABLE");  //makes a table element for the page
            
        for(var i = 0; i < personnes.length; i++) {
            var row = table.insertRow(i);
            row.insertCell(0).innerHTML = personnes[i].id;
            row.insertCell(1).innerHTML = personnes[i].nom;
            row.insertCell(2).innerHTML = personnes[i].prenom;
            row.insertCell(3).innerHTML = personnes[i].age;
        }
    
        var header = table.createTHead();
        var headerRow = header.insertRow(0);
        for(var i = 0; i < headers.length; i++) {
            headerRow.insertCell(i).innerHTML = headers[i];
        }
    
        document.body.append(table);
    }

    var mybutton = document.getElementById('btn')
    
    mybutton.addEventListener('click', createTable);

