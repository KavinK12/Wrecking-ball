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



cube1 = new Cube(500,950);
cube2 = new Cube(500,870);
cube3 = new Cube(500,790);
cube4 = new Cube(500,710);
cube9 = new Cube(500,630);
cube10 = new Cube(500,550);
cube11 = new Cube(500,470);
cube12 = new Cube(500,390);

cube5 = new Cube(600,950);
cube6 = new Cube(600,870);
cube7 = new Cube(600,790);
cube8 = new Cube(600,710);
cube13 = new Cube(600,630);
cube14 = new Cube(600,550);
cube15 = new Cube(600,470);
cube16 = new Cube(600,390);

cube17 = new Cube(700,950);
cube18 = new Cube(700,870);
cube19 = new Cube(700,790);
cube20 = new Cube(700,710);
cube21 = new Cube(700,630);
cube22 = new Cube(700,550);
cube23 = new Cube(700,470);
cube24 = new Cube(700,390);

ball1 = new Wrecking(300,600,45);
sling1 = new Slingshot(ball1.body, {x:300, y:350});


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
cube9.display();
cube10.display();
cube11.display();
cube12.display();
cube13.display();
cube14.display();
cube15.display();
cube16.display();
cube17.display();
cube18.display();
cube19.display();
cube20.display();
cube21.display();
cube22.display();
cube23.display();
cube24.display();
ball1.display();
sling1.display();

}

function mouseDragged() {
  Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY});  
}