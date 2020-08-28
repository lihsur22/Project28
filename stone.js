class Stone{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("sprites/stone.png");

        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 16, options);
        World.add(world, this.body);
    }    

    display() {
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
    }


};