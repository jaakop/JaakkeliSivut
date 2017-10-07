function Ball(){

    this.alpha = 255;
    this.drawn = false;
    this.x;
    this.y;
    this.r;
    this.b;
    this.g;
    this.show = function(x, y, widht, height, r, b, g){
        if(!this.drawn)
        {
            this.x = x;
            this.y = y;
            this.r = r;
            console.debug(this.r);
            this.b = b;
            console.debug(this.b);
            this.g = g;
            console.debug(this.g);
            this.drawn = true;
        }
        noStroke();
        fill(this.r, this.g, this.b, this.alpha);
        ellipse(this.x, this.y, widht, height);
        this.alpha -= 4 ;
        if(this.alpha <= 0){
            this.drawn = false;
            this.alpha = 255;
        }
    }

}