
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

	roof = new Roof(400,100,600,50);
	
	bobObject1 = new Bob(400,500,200/2);
	bobObject2 = new Bob(300,500,200/2);
	bobObject3 = new Bob(200,500,200/2);
	bobObject4 = new Bob(500,500,200/2);
	bobObject5 = new Bob(600,500,200/2);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display();

  rope1.display();
  
  drawSprites();
 
}



