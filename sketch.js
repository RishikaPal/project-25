var basket, paperObject;
var  groundObject

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(1600, 700); 
    
    engine = Engine.create();
    world = engine.world;

      groundObject=new ground(width/2,670,width,20);

    paperObject=new paper(200,450,70);

    Engine.run(engine);

    basket=new dustbin(1200,650);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();
 
  groundObject.display();
   basket.display(); 
   paperObject.display();

}


 function keyPressed()
   {
     if (keyCode === UP_ARROW) { 
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-145}); 
     }
  }



