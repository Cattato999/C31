const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

   
	engine = Engine.create();
  world = engine.world;
  
  dustbin = new Dustbin(1200,650);
  paper = new Paper(200,650)

	//Create the Bodies Here.
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  drawSprites();
 
}



