let btn = $('#masquer')
let btn2 = $('#aff')
let btn3 = $('#basc')

btn.on('click', function(){
    //$('div').hide();
    // $('div').fadeOut(2000);
    $('div').slideUp(2000);
})

btn2.on('click', function(){
    //$('div').show();
    // $('div').fadeIn(2000);
    $('div').slideDown(2000);
})

btn3.on('click', function(){
    // $('div').fadeToggle(1000)
    // $('div').toggle()
    $('div').slideToggle(1000);
})