
var x= 0;
var y = 0;
var on = true;
function setup()
{
createCanvas(1000, 1000);
frameRate(200);
}
function draw(){

	if(on){
	fill(255);
	ellipse(x, y, 100, 100);
	x += 50;
	}
	else if(!on){
	fill(255);
	ellipse(x, y, 100, 100);
	x -= 50;
	}
	if(x > 1000){
	y += 50
	on = false;
	}
	else if (x < 0){
	y += 50;
	on = true;}
}