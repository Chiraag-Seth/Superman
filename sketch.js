const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var superman,enemy;
var ground;
var backdrop;

function preload() {
//preload the images here
createCanvas(3000,800);
engine  = Engine.create();
world = engine.world;
backdrop = loadImage(".png/GamingBackground.png");

ground = new Ground();

box = new Box(700,100,70,70);
box2 = new Box(700,170,70,70);
box3 = new Box(700,240,70,70);
box4 = new Box(700,310,70,70);
box5 = new Box(700,380,70,70);
box6 = new Box(700,450,70,70);
box7 = new Box(770,100,70,70);
box8 = new Box(770,170,70,70);
box9 = new Box(770,240,70,70);
box10 = new Box(770,310,70,70);
box11 = new Box(770,380,70,70);
box12 = new Box(770,450,70,70);

enemy = new Enemy(800,100,20,20);
superman = new Superman(200,180, PI / 2);


}





function draw() {
  background(backdrop);
  
  Engine.update(engine);

  ground.display();

  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  enemy.display();
  superman.display();
}

