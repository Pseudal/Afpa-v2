const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let result = xhr.responseText;
//         console.log(result);
//         displayData(result);
//     }
// }
// const displayData = (res) => {
//     document.querySelector('#demo').innerHTML = res;
// }
// xhr.open('GET','data.txt',true);
// xhr.send(null);

let but = document.querySelector('#button')

function buton() {
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
        let result = xhr.responseText;
        console.log(result);
        displayData(result);
    }
}
        const displayData = (res) => {
        document.querySelector('#demo').innerHTML = res;
    }
        xhr.open('GET','data.txt',true);
        xhr.send(null);
}

but.addEventListener('click', buton)
