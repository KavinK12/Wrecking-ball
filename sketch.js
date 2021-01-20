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

wreckingball1 = new Wrecking(200,450,45);

cube1 = new Cube(500,950);
cube2 = new Cube(500,870);
cube3 = new Cube(500,790);
cube4 = new Cube(500,710);
cube5 = new Cube(600,630);
cube6 = new Cube(600,550);
cube7 = new Cube(600,470);
cube8 = new Cube(600,390);
sling1 = new Slingshot(wreckingball1, {x:200, y:200})


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
cube6.display();
cube7.display();
cube8.display();
wreckingball1.display();
sling1.display();

}