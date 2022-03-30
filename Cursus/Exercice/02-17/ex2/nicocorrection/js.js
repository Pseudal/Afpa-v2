var personnes = [
    {id : 001 , nom : "Durand", prenom :"Simon",age :42},
    {id : 002, nom : "Cand", prenom : "John",age :67},
    {id : 003, nom : "Lemon", prenom : "Eloi",age :23},
    {id : 004, nom : "Tanguy", prenom : "Edith" ,age : 45}
];


var contents 

for(var i = 0; i < personnes.length; i++){
    contents +="<tr><td>"+personnes[i].id+"</td>"+ "<td>"+personnes[i].nom+"</td>"+ "<td>"+personnes[i].prenom+"</td>"+ "<td>"+personnes[i].age+"</td></tr>";
}
document.getElementById("ici").append(contents)