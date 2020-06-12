function Pipe(){
    this.spacing = 125;
    this.top = random(innerHeight/6, (3/4)*innerHeight);
    this.bottom = innerHeight - (this.top + this.spacing);
    this.x = innerWidth;
    this.width = 60;
    this.speed = 7;
}

Pipe.prototype.show = function(){
    image(obstacle, this.x, 0, this.width, this.top);
    image(obstacle, this.x, innerHeight - this.bottom, this.width, this.bottom);
}

Pipe.prototype.update = function(){
    this.x -= this.speed;
}

Pipe.prototype.hits= function(bird){
    if(bird.y < this.top || bird.y > innerHeight - this.bottom - 10){
        if((bird.x > this.x) && (bird.x < this.width + this.x)){
            return true;
        }
    }else{
        return false;
    }
}