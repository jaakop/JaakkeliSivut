
var x= 0;
var y = 0;
var on = true;
var rapid = false;
var alpha = 255;
var ball;
var _width = window.innerWidth;
var _height = window.innerHeight;
function setup()
{
createCanvas(_width, _height);
frameRate(60);
ball = new Ball;
}
function draw(){
	if(rapid){
	if(on){
	fill(random(0, 255), random(0, 255), random(0,255));
	ellipse(x, y, 100, 100);
	x += 50;
	}
	else if(!on){
	fill(random(0, 255), random(0, 255), random(0,255));
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
	else{
		console.debug(_width, _height);
        clear();
		ball.show(random(0, _width), random(0, _height), 300, 300, random(0, 255), random(0, 255), random(0, 255));
		//fill(random(0, 255), random(0, 255), random(0,255), alpha);
		//ellipse(random(0, 1000), random(0, 1000), 100, 100);
	}
}