var canvas;
var music;
var oranged,reddish,greenish,bluish;
var ball;
var edgeSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(20,700),200,20,20);
    ball.setVelocity(4,9);
    ball.shapeColor = "#000000"

    oranged = createSprite(0,570,200,20);
    oranged.shapeColor = "#ff6f00";
    reddish = createSprite(210,570,00,20)
    reddish.shapeColor = "#ff0000";
    greenish = createSprite(420,570,200,20);
    greenish.shapeColor = "#40ff00"
    blueish = createSprite(550,570,200,20)
    blueish.shapeColor = "#3f48cc"
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edgeSprite = createEdgeSprites();

    if(ball.isTouching(reddish)&&ball.bounceOff(reddish)){

      ball.shapeColor = "#ff0000";

    }

    if(ball.isTouching(bluish)&&ball.bounceOff(reddish)){

        ball.shapeColor = "#ff0000";
  
      }
      

  drawSprites();


    //add condition to check if box touching surface and make it box
}
