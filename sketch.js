const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World ;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  var ground_options ={ 
    isStatic: true 
  }
  var ball_options ={
    restitution: 1.0
  }

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(0,370,500,5,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  
  console.log(ground.position.x);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,500,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
}