var baloon, database;
var position,height;
var baloonimg,bgimg;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
baloonimg=loadImage("Hot Air Ballon-04.png")
bgimg=loadImage("Hot Air Ballon-01.png")
  baloon = createSprite();
baloon.addImage("baloonimg");


  var baloonPosition = database.ref('baloon/height');
  baloonPosition.on("value", readPosition, showError);
}

function draw(){
  background("bgimg  ");
  
    if(keyIsDown(LEFT_ARROW)){
      baloon.x = baloon.x -10;
    }
    else if(keyIsDown(RIGHT_ARROW)){
     
      baloon.x = baloon.x + 10;
    }
    else if(keyIsDown(UP_ARROW)){
      baloon.y = baloon.y -10 ;
    }
    else if(keyIsDown(DOWN_ARROW)){
      baloon.y = baloon.y + 10;
    }
    drawSprites();
  
}

function updateHeight (x,y){
  database.ref('baloon/heigth').set({
    'x': height.x + x ,
    'y': height.y + y
  })
}

function readHeigth(data){
  heigth = data.val();
  console.log(height.x);
  baloon.x = height.x;
  baloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}

if (keyIsDown(UP_ARROW)){
  updateHeight(0,-10)
  baloon.addAnimation("hotAirBalloon",baloonimg)
  baloon.scale=baloon.scale -0.01;
}
