const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,bg
var polygon,polygonImg
var score = 0

function preload() {
    //backgroundImg1 = loadImage("sprites/bg.png")
    //backgroundImg2 = loadImage("sprites/bg2.jpeg")
    getTime();
    polygonImg = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(600,height,1200,20)
//bg = backgroundImg

//layer 1
box1 = new Box(330,335,60,80)
box2 = new Box(390,335,60,80)
box3 = new Box(450,335,60,80)
box4 = new Box(510,335,60,80)
box5 = new Box(570,335,60,80)

//layer 2
box6 = new Box(390,255,60,80)
box7 = new Box(450,255,60,80)
box8 = new Box(510,255,60,80)

//top

box9 = new Box(450,175,60,80)

polygon = Bodies.circle(200,200,40)
World.add(world,polygon)

sling = new SlingShot(this.polygon,{x:200,y:200})

}

function draw(){
if(backgroundImg){
    background(backgroundImg)
}
 Engine.update(engine)

ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()

box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()

sling.display()
fill("white")
text("SCORE : " + score,750,40)

imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,100,100)

}

function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }

    function mouseReleased(){
        sling.fly();
    }

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.polygon,{x:200,y:200 })
        sling.attach(this.polygon)
    }
}
async function getTime(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json()

    var dateTime = responseJSON.currentDateTime
    var hour = dateTime.slice(11,13)

    if(hour >= 06 && hour <= 19){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpeg"
    }
    backgroundImg = loadImage(bg)
    console.log(hour)
}
