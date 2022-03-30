if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}



xmlhttp.onload = function() {
    var xmlDoc = new DOMParser().parseFromString(xmlhttp.responseText,'text/xml');

    console.log(xmlDoc);


}

xmlDoc.getElementsByTagName("streetNumber")[0].childNodes[0].nodeValue

xmlhttp.open("GET","data.xml",false);
xmlhttp.send();