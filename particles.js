class Particles{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}