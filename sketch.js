const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var world,engine;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,height,1200,20);
  for(var k=0;k<=innerWidth;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
}
