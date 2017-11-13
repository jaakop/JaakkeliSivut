
function Make2DArray(cols, rows){
	var arr = new Array(cols);
	for(var i = 0; i < arr.length; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}
var widht = window.innerWidth/3;
var grid;
var cols;
var rows;
var w = 20;

var totalBees = 20;

function setup(){

	var canvas = createCanvas(201, 201);
	canvas.position(window.innerWidth/2 - 201/2, window.innerHeight / 8);
	console.log(window.innerWidth);
	console.log(window.innerWidth/2);
	cols = floor(width / w);
	rows = floor(height / w);
	grid = Make2DArray(cols, rows);
 
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j] = new Cell(i, j, w);
		}	
	}

 	 // Pick totalBees spots
  	var options = [];
  	for (var i = 0; i < cols; i++) {
 	   for (var j = 0; j < rows; j++) {
  	    options.push([i, j]);
  	  }
  	}


  	for (var n = 0; n < totalBees; n++) {
    	var index = floor(random(options.length));
    	var choice = options[index];
    	var i = choice[0];
    	var j = choice[1];
    	// Deletes that spot so it's no longer an option
    	options.splice(index, 1);
    	grid[i][j].bee = true;
	  }
	  
	  for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
		  grid[i][j].countBees();
		}
	  }

}

function mousePressed(){
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			if(grid[i][j].contains(mouseX, mouseY)){
				grid[i][j].reveal();

				if(grid[i][j].bee){
					GameOver();
				}
			}
		}	
	}
}


function draw(){
	background(255);
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j].show();
		}	
	}
}

function GameOver(){
	console.log("Game Over!");
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			grid[i][j].revealed = true;
		}	
	}
}
