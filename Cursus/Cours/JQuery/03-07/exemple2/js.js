

$(function () {
    $('button').on('click', function(){
        $('p').css('color', 'green')
        $(this).css('background-color', 'red')
    })
    $('li').each(function(){
        $(this).on('click', function(){
            $(this).css('color', 'blue')
        })
    })
});
$('a').hover(function () {
        $(this).css('color', 'blue')
        
    }, function () {
        $(this).css('color', '')
    }
);

