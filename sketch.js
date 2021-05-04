var canvas;
var music;
var surface1 , surface2 ,surface3,surface4,box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(50,560,200,20);
surface1.shapeColor="red";
surface2=createSprite(270,560,200,20);
surface2.shapeColor="blue";
surface3=createSprite(480,560,200,20);
surface3.shapeColor="yellow";
surface4=createSprite(700,560,200,20);
surface4.shapeColor="pink";
    //create box sprite and give velocity
    box=createSprite(random(260,120),random(260,120),50,50);
    box.velocityY=5;
    box.velocityX=7;
    box.shapeColor="white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box)&&box.bounceOff(surface1)){
    box.shapeColor="red";
    music.play()
}
if(surface2.isTouching(box)&&box.bounceOff(surface2)){
    box.shapeColor="blue";
    music.play()
}
if(surface3.isTouching(box)&&box.bounceOff(surface3)){
    box.shapeColor="yellow";
    music.play()
}
if(surface4.isTouching(box)&&box.bounceOff(surface4)){
    box.shapeColor="pink";
    music.play()
}
    drawSprites()
}
