class Ground {
    constructor() {
        var optics = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(400,540,800,12,optics);
        World.add(world, this.body);
    }
    display(){
        //var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(400, 550, 800,12);
      }
}