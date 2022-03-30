const form = $('form');
const nom = $('#nom');
const lang = $('#lang')
const dwwm = $('#dwwm')
const formation = $('input:checkbox')
const genre = $('input:radio')
let genrecheck = $('input:radio:checked')

form.on('submit', function(){
    if (nom.val()=="") {
       //  alert("un nom est attendu")        
        nom.after('<div class="mt-2 alert alert-danger text-center"><strong>Le champ est réquis!</strong></div>')
        return false;
        
    }else if (lang.val() == ""){
        lang.after('<div class="mt-2 alert alert-danger text-center"><strong>Faites un choix!</strong></div>')
        return false; 
    }else if(!formation.is(':checked')){
        $('#ici').after('<div class="mt-2 alert alert-danger text-center"><strong>Au moins 1 formation!</strong></div>')
        return false; 
    // }else if(!genre.is(':checked')){
    //     $('#ici2').after('<div class="mt-2 alert alert-danger text-center"><strong>Votre genre!</strong></div>')
    //     return false; 
    }   else if($('input:radio:checked').length == 0){
        alert(genrecheck.length)
        $('#ici2').after('<div class="mt-2 alert alert-danger text-center"><strong>Votre genre!</strong></div>')
        return false; 
    }
})

// lang.on('change', function(){
//     alert($(this).val())
// })    

// dwwm.on('click' function(){
//     alert('lol')
//     alert($(this).is(':checked'))
// })