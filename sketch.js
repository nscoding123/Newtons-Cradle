const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof, ground;
var chain1, chain2, chain3, chain4, chain5;

function preload(){}	

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 600, 40);
	bob2 = new Bob(300, 600, 40);
	bob3 = new Bob(400, 600, 40);
	bob4 = new Bob(500, 600, 40);
	bob5 = new Bob(600, 600, 40);
	roof = new Roof(400, 100, 600, 30);
	ground = new Roof(400, 700, 850, 50);
	chain1 = new Chain(bob1.body, roof.body, -150, 0);
	chain2 = new Chain(bob2.body, roof.body, -50, 0);
	chain3 = new Chain(bob3.body, roof.body, 50, 0);
	chain4 = new Chain(bob4.body, roof.body, 150, 0);
	chain5 = new Chain(bob5.body, roof.body, 250, 0);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100, y:-100});
	}
}




