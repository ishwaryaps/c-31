class Plinko{
    constructor(x,y,r){
        
    var options={
        isStatic:true,    
        friction:0,        
    }
   
    this.x=x;
    this.y=y;
    this.r=10;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body);
 }
 
  display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("white");
      ellipse(0,0,this.r,this.r);
      //imageMode(CENTER);
       //image(this.image, 0,0,this.r, this.r)
       

      pop();
      
  }



}