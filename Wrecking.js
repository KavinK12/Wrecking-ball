class Wrecking{
  constructor(x,y,radius) {
 var rest = {
   restitution: 0.5
 }

 
 this.body = Bodies.rectangle(x,y,radius,radius,rest);
 this.width = radius;
 this.height = radius;
 World.add(myWorld, this.body);
  }
 display() {
 var pos = this.body.position
 var angle = this.body.angle
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 fill("skyblue");
 stroke("blue");
 ellipseMode(RADIUS);
 ellipse(0,0,this.width,this.height);
 pop();
 }
}