class Suspend{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.suspend = Constraint.create(options);
        World.add(world, this.suspend);
    }

    reset(body) {
        this.suspend.bodyA = body;
    }
    
    pelt() {
        this.suspend.bodyA = null;
    }

    display(){
        if(this.suspend.bodyA) {
        var pointA = this.suspend.bodyA;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}