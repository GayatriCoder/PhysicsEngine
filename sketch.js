const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, block4, block5, block6, block7;
var ball;
var slingshot;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(400,390,800,20);

  block1 = new Block(700,385,20,40);
  block2 = new Block(700,380,20,40);
  block3 = new Block(700,375,20,40);
  block4 = new Block(700,370,20,40);
  block5 = new Block(700,365,20,40);
  block6 = new Block(700,360,20,40);
  block7 = new Block(700,355,20,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {
  background(255,255,255);  

  ground.display();
  block1.display();
  block2.display();
  block3.dislplay();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  ball.display();

  drawSprites();
}

function mouseDragged()
{
  Matter.body.setPosition(this.ball,{x:mouseX,x:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}
