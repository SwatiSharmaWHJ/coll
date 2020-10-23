

var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 200, 150);
  fixedrect.shapeColor="green"
  movingrect=createSprite(600, 250, 100, 100);
  movingrect.shapeColor="green"
}

function draw() {
  background("black"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
  {  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"

  }
  else{

    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }
  drawSprites();
}