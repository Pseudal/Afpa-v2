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