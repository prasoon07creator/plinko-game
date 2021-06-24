class particle{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.r=r
    this.body = Bodies.rectangle(x,y,this.r,options);
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
     Push ()
      rotate(angle)
      ellipseMode(RADIUS);
      
    ellipse(0, 0, this.r,this.r);
    pop ()
    }
  };
