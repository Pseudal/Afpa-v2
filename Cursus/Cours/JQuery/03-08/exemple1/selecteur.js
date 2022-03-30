$('span').parent('p').css('color','darkblue');
$('div').children().css('color','green');
$('*').css('background-color','grey');
$('li:first').css('color','white');
$('ul li:last').css('color','cyan');
$('ul li:even').css('background-color','darkred');

$('h1').text('text de remplacement')
$('div>p').html('<i>paragraphe en ita</i>')

$('div').after('<h2>text Après</h2>')
$('div').before('<h2>text Avant</h2>')
$('div').append('<h2>text à la fin</h2>')
$('div').prepend('<h2>text au début</h2>')

let url = $('img')
let source = url.attr('src')
console.log(source);
url.attr('src', 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png').width('50px')