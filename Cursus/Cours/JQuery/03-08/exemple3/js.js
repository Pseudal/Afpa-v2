$(function(){
    const article2 = $('#art2');
    let pos2 = article2.offset();
    console.log(pos2);

    const article1 = $('#art1')
    article1.on('click', function(){
        $(this).offset({top: 500, left: 500})
    })

    console.log(article1.position());

    $('button').on('click', function(){
        const pos1 = $('#art1').offset();
        $(document).scrollTop(0);
    })

    const img = $('img');
    const large = img.width();
    const haut = img.height(); 
    // 
    $('#modif').on('click', function(e){
        e.preventDefault();
        let wfield = $('#largeur').val()
        let hfield = $('#hauteur').val()
        console.log(wfield, hfield);
        img.width(wfield)
        img.height(hfield)
    })
 
}) 