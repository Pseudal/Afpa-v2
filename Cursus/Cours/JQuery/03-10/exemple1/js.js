const img = $('.img');
let topimg = $('#topimg');
img.each(function(){
    $(this).hover(function(){
        topimg.attr('src', $(this).attr('src'))

    })
})

topimg.on('click', function(){
    window.open(topimg.attr('src'));
})

$('button').on('click',function(){
    $('h1').animate({
        opacity: 0.5,
        fontSize: '50',
        left: '+=1000'
    },3000)
})