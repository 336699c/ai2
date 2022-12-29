function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); 
    xmlHttp.send(null);
}

httpGet("/data/pane.json",e=>{
  e= JSON.parse(e);
e.forEach((f,i)=>{
document.getElementById("pane-button-id"+i).innerHTML=`<a href="/`+f+`">`+f+`</a> 
})
})
