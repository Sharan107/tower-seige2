const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var gameState="onSling";

function setup() {

  createCanvas(1200,600);
	
  engine = Engine.create();
  world = engine.world;

  polygon= new Polygon(200,300,50);
  rope= new Rope(polygon.body,{x:150,y:300});
  ground= new Ground(600,500,1200,10);
  block1= new Ground(550,400,260,10);
  block2= new Ground(890,250,190,10);

  box1= new Block(550,375,30,40);
  box2= new Block(518,375,30,40);
  box3= new Block(487,375,30,40);
  box4= new Block(580,375,30,40);
  box5= new Block(610,375,30,40);
  box6= new Block(640,375,30,40);
  box7= new Block(460,375,30,40);

  box8= new Block(487,333,30,40);
  box9= new Block(610,333,30,40);
  box10= new Block(580,333,30,40);
  box11= new Block(518,333,30,40);
  box12= new Block(550,333,30,40);

  box13= new Block(580,291,30,40);
  box14= new Block(550,291,30,40);
  box15= new Block(518,291,30,40);
  
  box16= new Block(550,249,30,40);

  box17= new Block(890,245,30,40);
  box18= new Block(870,245,30,40);
  box19= new Block(830,245,30,40);
  box20= new Block(915,245,30,40);
  box21= new Block(950,245,30,40);

  box22= new Block(890,203,30,40);
  box23= new Block(870,203,30,40);
  box24= new Block(920,203,30,40);

  box25= new Block(890,161,30,40);

  Engine.run(engine);

}


function draw() {

  background("purple");

  polygon.display();
  rope.display();
  ground.display();
  block1.display();
  block2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  textSize(20)
  text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blacks",300,50);

  drawSprites();

}

function mouseDragged(){
  if(gameState!=="launched"){
  Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  rope.fly();
  gameState="launched";
}

function keyPressed(){
  if(keyCode==32){
    Body.setPosition(polygon.body,{x:200,y:300});
    rope.attach(polygon.body);
    gameState="onSling";
  }
}
