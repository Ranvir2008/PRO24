var ball,box1,box2,box3,ground1;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
    ground1 = new ground(600,690,1200,20)
	 ball = new Box(100,100,20)
    box1 = new redbox(1100,632,20,100)
	box2 = new redbox(900,630,20,100)
	box3 = new redbox(1000,670,180,20)
	Engine.run(engine);
}

function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground1.display();
}
function keyPressed() {
 if (keyCode === 32) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-60});
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

 }
}
