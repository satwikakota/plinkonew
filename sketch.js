const Engine= Matter.Engine; 
const World= Matter.World; 
const Bodies= Matter.Bodies;
const Body= Matter.Body; 
var engine, world; 
var division, plinko,particles,divisionHeight;
division=[];
plinko=[];
particles=[];
divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine=Engine.create(); 
  world=engine.world;
  ground1=new Ground(240,800,480,20);
  for(var i=0;i<=width;i=i+80){
    division.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for(var l=50;l<=width; l=l+50){
    plinko.push(new Plinko(l,75,10));
    plinko.push(new Plinko(l,150,10));
    plinko.push(new Plinko(l,225,10));
    plinko.push(new Plinko(l,300,10));
    plinko.push(new Plinko(l,375,10));
  }

}

function draw() {
  Engine.update(engine);
  background(0);
  ground1.display();
  for(var j=0; j<division.length; j++){
    division[j].display();
  }
  for(var j=0; j<plinko.length; j++){
    plinko[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30,width/2+30),10,10));
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();
    console.log(particles[j]);
  }
}