class Slingshot{
 constructor(bodyA, pointB) {
 var li = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.05,
length: 250
 }

 this.pointB = pointB;
 this.sling = Constraint.create(li);
 World.add(myWorld, this.sling);
 }

 display() {
 var pointA = this.sling.bodyA.position;
 var pointB = this.pointB;
 push();
 stroke("brown")
 strokeWeight(10); 
 line(pointA.x, pointA.y, pointB.x, pointB.y);
 pop();
 }



}