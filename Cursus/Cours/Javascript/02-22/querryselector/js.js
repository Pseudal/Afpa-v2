var hide = document.querySelector('#infoSup')
var check = document.querySelector('#check')
hide.style.display = "none"
check.addEventListener('click', function(){
    if(check.checked == true)
        hide.style.display = "contents"
    else
        hide.style.display = "none"
})
