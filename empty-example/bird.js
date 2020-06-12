function Bird(){
    this.y = innerHeight/2;
    this.x = 30;
    this.gravity = 0.6;
    this.r = 50;
    this.velocity = 0;
    this.lift = -15;
    this.ariResistance = 0.94;
}

Bird.prototype.show = function(){
    image(raven, this.x, this.y, this.r, this.r);
}
Bird.prototype.update = function(){
    this.velocity += this.gravity;
    this.velocity *= this.ariResistance;
    this.y += this.velocity;
    if(this.y > innerHeight - 50){
        this.y = innerHeight - 50; 
        this.velocity = 0;
    }
    if(this.y < 0){
        this.y = 0;
        this.velocity = 0;
    }
    
}

Bird.prototype.up = function(){
    this.velocity += this.lift;
}