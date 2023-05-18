
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
let ball;

function preload()
{
	
}

function setup() {
	createCanvas(1345, 600);


	engine = Engine.create();
	world = engine.world;
	options ={
		isStatic:true
	}
	ground= new Ground (10,550,2665,13,options)
	leftSide = new Ground (1090,505,10,80)
	rightSide = new Ground (900,505,10,80)

	var ball_options={
		isStatic: false,
		restitution: 0.9,
		friction:0,
		density:1.2
	}

	

	//Create the Bodies Here.
	ball = Bodies.circle (200,10,20,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine)
  drawSprites();
  ground.show()
  leftSide.show()
  rightSide.show()
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:7,y:0})
	}
}