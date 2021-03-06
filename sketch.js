const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var ball, slingshot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    box5 = new Box(700,160,70,70);
   

    ball = new Ball(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:200});
}

function draw(){
   
    background(0);

    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    
    box1.display();
    box2.display();
    
    box3.display();
    box4.display();
    box5.display();
    

    ball.display();
   
    slingshot.display();    
}

function mouseDragged(){
Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
    slingshot.fly();
}