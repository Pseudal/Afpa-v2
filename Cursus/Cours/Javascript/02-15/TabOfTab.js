// var noteEleves = [ [15,12,8], [12,10,11], [8,7,4] ];

// for(var e = 0; e < noteEleves.length; e++){
//     console.log("Les de l' élève de N° " + ( e + 1 ) + " sont: ");
//     for(var n = 0; n < noteEleves[e].length; n++){
//         console.log("Notes de N°" + ( n + 1) + ": " + noteEleves[e][n]);
//     }
//     console.log("***********");
// }
/***************/
// var n = 2//parseInt(prompt("nombre d'élève"))
// var tabe = new Array(n)
// var test = 0;


// for (let i = 0; i < tabe.length; i++) {
//     var notes = 2 //parseInt(prompt("nombre de note"));
//     tabe[i] = new Array(notes);
// }           
// console.log(tabe)
/***************/

var notes = [10, 12, 15, 8, 13];
notes.push(20);
console.log(notes);
notes.pop();
console.log(notes);
notes.shift();
console.log(notes);
notes.unshift("toto");
console.log(notes)
notes.reverse();
console.log(notes)
notes.sort(function(a, b){return a-b});
console.log(notes);