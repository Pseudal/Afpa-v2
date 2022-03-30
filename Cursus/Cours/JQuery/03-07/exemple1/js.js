// jQuery(document).ready(function(){
//     alert("hello")
// });
// $(document).ready(function () {
//     console.log("lol");
// });

$(function () {
    let title1 = $('h1');
    console.log(title1[0]);
    title1.css('color', 'blue')
    title1.text('text de remplacement')
    let p1 = $('.para')
    p1.css('color', 'green')
    let li1 = $('#first')
    li1
    .css('background-color','red')
    .width(100)
    .css('color', 'blue')
});