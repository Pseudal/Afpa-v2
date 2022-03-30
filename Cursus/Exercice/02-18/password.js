var log = document.getElementById('log')
log.onfocus = function(){
    if(log.value == "Login"){
        log.value = "";
    };
};
log.onblur = function(){
    if(log.value == ""){
        log.value = "Login";
    }
}

function Show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

var hide = document.getElementById('check');
hide.addEventListener('click', Show)


