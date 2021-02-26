class Superman{
    constructor(x,y,r){
        var options = {
            density: 1,
            frictionAir: 1

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        this.image = loadImage(".png/Superhero-01.png");
        World.add(world, this.body);
    }
 
}