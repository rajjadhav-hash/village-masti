class SlingShot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.006
        }
      
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
      
       
    
  }
    attach(body){
      this.sling.bodyA=body;
    }
      display(){
        if(this.sling.bodyA){
          var pointA=this.sling.bodyA.position;
          var pointB=this.sling.pointB;
          strokeWeight(4);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
      }
      fly(){
          this.sling.bodyA=null;
      }
    }
