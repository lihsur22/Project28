
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var grund, stone, suspendor;
var shooter, tree;
var m1, m2, m3, m4, m5, m6;

function preload()
{
	shooter = loadImage("sprites/boy.png");
	tree = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	m1 = new Mango(1005,320,80);
	m2 = new Mango(1155,280,80);
	m3 = new Mango(1305,280,80);
	m4 = new Mango(1100,250,90);
	m5 = new Mango(1230,200,80);
	m6 = new Mango(1155,180,90);

	grund = new Ground(700,680,1405,20);
	stone = new Stone(112,568);
	suspendor = new Suspend(stone.body,{x:112,y:568});


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(200);
	
	Engine.update(engine);

	detectCollision(stone,m1);
	detectCollision(stone,m2);
	detectCollision(stone,m3);
	detectCollision(stone,m4);
	detectCollision(stone,m5);
	detectCollision(stone,m6);

	imageMode(CENTER);
	image(shooter,160,620,150,200);
	image(tree,1140,400,500,600)
	
	grund.display();
	stone.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	suspendor.pelt();
}

function detectCollision(s,m) {
	mangoPos = m.body.position;
	stonePos = s.body.position;

	var distan = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if(distan <= 16 + m.r)
	{
		Matter.Body.setStatic(m.body,false);
	}

}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.setPosition(stone.body, {x:112,y:568})
		suspendor.reset(stone.body);
	}
}
