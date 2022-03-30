    const tab = $('li');
    $('article:not("#tab1")').hide();
    tab.each(function(){
        $(this).on('click', function(){
            const link = $(this).find('a').attr('href');
            console.log(link);
            $('article:not('+link+')').hide();
            $(link).show()
        })
    })

    