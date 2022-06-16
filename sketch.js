var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  var select = Math.round(Math.random(1,2))
  if(frameCount % 80 == 0){
    if(select == 1){
      createApples()
    }
    else{
      createLeaves()
    }
  }
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.velocityY = 2
  apple.scale = 0.1
  apple.lifetime = 100
}
function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.velocityY = 2
  leaf.scale = 0.1
  leaf.lifetime = 150
}