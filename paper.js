class paper{
    constructor() {
        var optics ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(100,530,50,optics);
        this.image = loadImage("paper.png")
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);    
        fill("indigo");
        image(this.image,pos.x,pos.y,50,50);
    }
}