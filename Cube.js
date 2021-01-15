class Cube{
 constructor(x,y){
var bounce = {
 restitution: 0.5 
}

this.body = Bodies.rectangle(x,y,80,80,bounce);
this.width = 80;
this.height = 80;
World.add(myWorld, this.body);
 }
 display() {
 
 var pos = this.body.position;
 var angle = this.body.angle;
push();
 translate(pos.x,pos.y);
 rotate(angle);
 fill("grey");
 stroke("green");
 rectMode(CENTER);
 rect(0,0,this.width,this.height);
pop();
 }
}

