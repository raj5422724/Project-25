
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperObject; 
var Box,Box1,Box2;

/*function preload()
{
	img = loadImage("dustbingreen.png");	
}
*/

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();

	paperObject = new paper();

	Box = new dbase();
	Box1 = new dustbin(550, 490,20,100);
	Box2 = new dustbin(750, 490,20,100);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(255,255,255);

	keyPressed();

	ground.display();

	paperObject.display();

	Box.display();
	Box1.display();
	Box2.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:5,y:-30})
	}
}



