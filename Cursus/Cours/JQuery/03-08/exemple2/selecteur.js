const section = $('section');
let test = section.hasClass('myClass')
console.log(test);

$('#add').on('click', function(){
    section.addClass('myClass')
});
$('#supp').on('click', function(){
    section.removeClass('myClass')
});

$('#change').on('click', function(){
    if(test) 
        section.removeClass('myClass')
    else 
        section.addClass('myClass')    
    test = section.hasClass('myClass')
});
$('#supp2').on('click', function(){
    // $('p:last').remove();
    $('p:last').empty();
});
$('h2').on('click', function(){
    $(this).css('color', 'blue' )
});

$('#se').on('click', function(){
    $('h2').off('click')
});