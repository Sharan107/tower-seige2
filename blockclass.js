class Block{
    constructor(x,y,width,height){
var options={
isStatic:false,
friction:0.5
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
//this.visibility=255;
World.add(world,this.body);
}

display(){

if(this.body.speed<3){
    var pos=this.body.position;
    rectMode(CENTER);
    strokeWeight(2);
    stroke("lightBlue");
    fill("blue");
    rect(pos.x,pos.y,this.width,this.height);
}
else{
    World.remove(world,this.body);
    push()
   // this.visibility= this.visibility-5;
 //   tint(255,this.visibility);
    pop() 
}

}
}
