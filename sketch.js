const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;


function setup() {
createCanvas(1200,1000);

myEngine = Engine.create();
myWorld = myEngine.world;

ground1 = new Ground(600,989,1200,40);

cube1 = new Cube(600,950);
cube2 = new Cube(600,870);
cube3 = new Cube(600,790);
cube4 = new Cube(600,710);
cube5 = new Cube(600,630);


}

function draw() {
background("lightgrey");

Engine.update(myEngine);

ground1.display();
cube1.display();
cube2.display();
cube3.display();
cube4.display();
cube5.display();

}