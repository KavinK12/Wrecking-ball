class Ground{
  constructor(x,y,width,height) {
 var stat = {
  isStatic: true
 }

 this.body = Bodies.rectangle(x,y,width,height,stat);
 this.width = width;
 this.height = height;
 World.add(myWorld, this.body);
  }
 display() {
 var pos = this.body.position;
 
 fill("red");
 stroke("blue");
 rectMode(CENTER);
 rect(pos.x,pos.y,this.width,this.height);

 }
}