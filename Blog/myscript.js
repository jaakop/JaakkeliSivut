window.onload = setup;
var loginButton;
function setup(){
    loginButton = document.getElementById("login");
    loginButton.onclick = clicked;
}

function clicked(){
    var json;
    loadJSON(function(response){
        json = JSON.parse(response);
    });
    alert(json.users[0].name);
}

function loadJSON(callback){
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function(){
        if(xobj.readyState == 4 && xobj.status == "200"){
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}