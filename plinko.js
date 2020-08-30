class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:1.0,
            friction:0
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        var angle=this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}