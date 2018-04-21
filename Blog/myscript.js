window.onload = setup;
var loginButton;

function setup(){
    loginButton = document.getElementById("login");
    loginButton.onclick = clicked;
}

function clicked(){
    LoadData("data.json", testJSON)
}

function LoadData(data, cFunction) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cFunction(xhttp.responseText);
        }
    };
    xhttp.open("GET", data, true);
    xhttp.send();
}

function testJSON(xhttp){
    var data = JSON.parse(xhttp);
    console.log(data.users);
}