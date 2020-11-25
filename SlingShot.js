class SlingShot {
    constructor(bodyA,pointB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.04,
        lenght : 10
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
 }
   display(){
   var pointA = this.sling.bodyA.position;
   var pointB = pointB;
   
   strokeWeight(4);
   line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}