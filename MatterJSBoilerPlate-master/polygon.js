class poly {
    constructor(x, y) {
      this.img=loadImage("7-2-hexagon-free-png-image.png")
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1
      }
      this.body= Bodies.circle(x,y,30,options);
    
    
          World.add(world, this.body);
    }
    display(){
    
      imageMode(CENTER);
    image(this.img,this.body.position.x,this.body.position.y,50,50)
    
      
   
    
    }
  };
  