
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,boyImg,stone,elasticBand;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1365,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(800,630,1600,30);
	  tree = new Tree(1150,390,400,500);
    stone = new Stone(150,450,50,50);
    elasticBand = new SlingShot(stone.body,{x:200,y:100})

	  mango1 = new Mango(1060,350);
	  mango2 = new Mango(1200,200);
	  mango3 = new Mango(1150,300);
	  mango4 = new Mango(1100,220);
	  mango5 = new Mango(1250,350);

	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  tree.display();
  image(boyImg,200,530,200,350);
  stone.display();
 // elasticBand.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



