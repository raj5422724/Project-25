class dbase {
    constructor() {
        this.body = Bodies.rectangle(650,450,200,20);
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        Matter.Body.setStatic(this.body, true);		
        imageMode(CENTER);
        /*fill("red");*/
        image(this.image,pos.x,pos.y, 200, 200);
    }
}