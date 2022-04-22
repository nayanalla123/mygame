var ground , groundImg ,ivground ;
var ninja,runningNinjaImg;
var zombieImg;

function preload(){
groundImg=loadImage("ground.png")
runningNinjaImg=loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png")
zombieImg=loadAnimation("zombie.png","zombie1.png","zombie2.png","zombie4.png","zombie5.png","zombie6.png")

}

function setup(){
createCanvas(1200,600);
ground=createSprite(1200/2,570,1200,20)
ground.addImage("ground",groundImg); 

ivground=createSprite(1200/2,575,1200,20)
ivground.visible=false


ninja=createSprite(50,500,50,50);
ninja.addAnimation("runningNinja",runningNinjaImg)
ninja.scale = 1.5;
}

function draw(){
background("pink")
ground.velocityX=-4
if(ground.x<500){
ground.x=ground.width/2
}

if(keyDown("SPACE")&& ninja.y>200){

    ninja.velocityY=-15

}
ninja.velocityY=ninja.velocityY+0.8


spawnZombies()
ninja.collide(ivground)
drawSprites();
}
 function spawnZombies(){
     if(frameCount%250===0){
         var zombie =createSprite(1250,490,50,50)
         zombie.addAnimation("runZombie",zombieImg)
         zombie.velocityX=-8

     }
 }
