const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3;
var ball;
var slingshot;
var polygon_img;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  this.polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(725,50,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
 
    block17 = new Block(620,180,30,40);
  block18 = new Block(650,180,30,40);
  block19 = new Block(680,180,30,40);
  block20 = new Block(720,180,30,40);
  block21 = new Block(750,180,30,40);
  block22 = new Block(780,180,30,40);
  block23 = new Block(820,180,30,40);
  //level two
  block24 = new Block(650,140,30,40);
  block25 = new Block(680,140,30,40);
  block26 = new Block(720,140,30,40);
  block27 = new Block(750,140,30,40);
  block28= new Block(780,140,30,40);
  //level three
  block29 = new Block(680,100,30,40);
  block30 = new Block(720,100,30,40);
  block31 = new Block(750,100,30,40);
  //top
  block32 = new Block(720,60,30,40);

  this.slingshot=new slingShot(this.polygon,{x:100,y:200});
  this.slingshot1=new slingShot(this.block32.body,{x:720,y:50});
  this.slingshot2=new slingShot1(this.block31.body,{x:750,y:50});
  this.slingshot3=new slingShot1(this.block30.body,{x:720,y:50});
  this.slingshot4=new slingShot1(this.block29.body,{x:690,y:50});
    this.slingshot5=new slingShot2(this.block28.body,{x:780,y:50});
    this.slingshot6=new slingShot2(this.block27.body,{x:750,y:50});
    this.slingshot7=new slingShot2(this.block26.body,{x:720,y:50});
    this.slingshot8=new slingShot2(this.block25.body,{x:690,y:50});
    this.slingshot9=new slingShot2(this.block24.body,{x:660,y:50});
    this.slingshot10=new slingShot3(this.block23.body,{x:810,y:50});
    this.slingshot11=new slingShot3(this.block22.body,{x:780,y:50});
    this.slingshot12=new slingShot3(this.block21.body,{x:750,y:50});
    this.slingshot13=new slingShot3(this.block20.body,{x:720,y:50});
    this.slingshot14=new slingShot3(this.block19.body,{x:695,y:50});
    this.slingshot15=new slingShot3(this.block18.body,{x:660,y:50});
      this.slingshot16=new slingShot3(this.block17.body,{x:635,y:50});
}
function draw() {
  background(56,44,44); 

  textSize(30);
  stroke("black");
  strokeWeight(4);
  fill("blue");
  text("YOU WON",300,280);
  fill("red");
   textSize(24);
   text("hanging man",650,250);
   text("standing man",320,330);
   textSize(30);
   fill("lightyellow");
   stroke("black");
   strokeWeight(4);
   text("you have 1 chances for making the",20,50);
   text("standing man to stand ",20,80);
   text("if you want to play in same position press spacebar",20,360);
   text("in the ground and when 1 chance is over",20,110);
   text("the haging man will fall directly",20,140);

  textSize(20);
  fill("lightyellow");

  image(polygon_img,this.polygon.position.x,this.polygon.position.y,50,50);

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block32.display();
 slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
  slingshot9.fly();
  slingshot8.fly();
  slingshot7.fly();
  slingshot6.fly();
  slingshot5.fly();
  slingshot4.fly();
  slingshot3.fly();
  slingshot2.fly();
  slingshot1.fly();
  slingshot14.fly();
  slingshot15.fly();
  slingshot16.fly();
  slingshot13.fly();
  slingshot12.fly();
  slingshot11.fly();
  slingshot10.fly();
}


function keyPressed(){
  if(keyCode== 32){
     Matter.Body.setPosition(this.polygon, {x:50,y:200});
    slingshot.attach(this.polygon);
  }
}