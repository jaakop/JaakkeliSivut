window.onload = setup;
var loginButton;
function setup(){
    loginButton = document.getElementById("login");
    loginButton.onclick = clicked;
}

function clicked(){
    var json; 
    loadJSON(function(response) {
        // Parse JSON string into object
          var json = JSON.parse(response);
       });
    alert(json.users[0].name);
}

function loadJSON(callback) {   
    
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
        xobj.send(null);  
     }
     