var OpenAI={
create(data,apikey,callback){
data = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.openai.com/v1/completions");

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+apikey);

xhr.onreadystatechange = function () {
 if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
    callback(xhr.responseText,xhr.status);
 }};

xhr.send(data);
},
dallepicture(data,apikey,callback){
data = JSON.stringify(data);
 
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.openai.com/v1/images/generations");

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+apikey);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
       callback(xhr.responseText,xhr.status);
   }};

 xhr.send(data);
}
}
