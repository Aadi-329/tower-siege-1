var box1,box2,box3,box4,box5,box6,box7
var ground1,ground2,ground3
var polygon
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  polygon=new poly(300,100) 
  rope=new SlingShot(polygon.body,{x:200,y:300})

box1= new Box(320,550,30,30,rgb(50,250,250))
box2= new Box(350,550,30,30,rgb(50,250,250))
box3= new Box(380,550,30,30,rgb(50,250,250))
box4= new Box(410,550,30,30,rgb(255,0,0))
box5= new Box(440,550,30,30,rgb(255,0,0))
box6= new Box(470,550,30,30,rgb(255,0,0))
box7= new Box(500,550,30,30,rgb(255,0,0))

box8= new Box(350,520,30,30,rgb(50,250,250))
box9= new Box(380,520,30,30,rgb(50,250,250))
box10= new Box(410,520,30,30,rgb(255,0,0))
box11= new Box(440,520,30,30,rgb(255,0,0))
box12= new Box(470,520,30,30,rgb(255,0,0))

box13= new Box(380,490,30,30,rgb(50,250,250))
box14= new Box(410,490,30,30,rgb(255,0,0))
box15= new Box(440,490 ,30,30,rgb(255,0,0))

box16= new Box(410,490,30,30,rgb(255,0,0))

box17= new Box(350+300,480,30,30,rgb(50,250,250))
box18= new Box(380+300,480,30,30,rgb(50,250,250))
box19= new Box(410+300,480,30,30,rgb(255,0,0))
box20= new Box(440+300,480,30,30,rgb(255,0,0))
box21= new Box(470+300,480,30,30,rgb(255,0,0))

box22= new Box(380+300,450,30,30,rgb(50,250,250))
box23= new Box(410+300,450,30,30,rgb(255,0,0))
box24= new Box(440+300,450,30,30,rgb(255,0,0))

box25= new Box(410+300,420,30,30,rgb(255,0,0))

ground1=new Ground(400,680,800,20)
ground2=new Ground(720,500,200,15)
ground3=new Ground(400,600,300,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

ellipseMode(RADIUS);
//polygon=Bodies.circle(410,520,40,{isStatic:false})
//console.log(polygon.position.y)
//ellipse(polygon.position.x,polygon.position.y,40,0)

  box1.display();
  polygon.display();
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
  ground1.display();
  ground2.display()
  ground3.display()
  rope.display();
  drawSprites();
 
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  rope.fly()

}
