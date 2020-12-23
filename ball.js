class Box{
    constructor(x,y,r){
        var ball_options ={
            restitution: 0.6,
            friction:0.8,
            density:1.0
        }
        this.body = Bodies.circle(x,y,r,ball_options);
        this.r = r
        World.add(world,this.body);
    }
    display(){  
    
    ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.width, this.height);

    
    }
    }
    