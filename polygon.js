class Polygon{

    constructor(x,y,r){

        var options={
          isStatic:false,
          restitution:0.5,
          friction:0.5,
          density:1.2
        }
        
        this.y=y;
        this.x=x;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
        
        
        }
        
        display(){
        
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
         pop()
        }
}