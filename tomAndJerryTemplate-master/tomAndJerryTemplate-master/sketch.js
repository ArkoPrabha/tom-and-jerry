var mouseGiftImg, mouseGift, mouseMovingImg, mouseMoving, mouseInspectImg, mouseInspect,gardenImg,garden
var catSitImg, catSit, catMovingImg, catMoving, catStopImg, catStop
var mouse, cat

function preload() {
    //load the images here
    mouseGiftImg= loadAnimation("images/mouse1.png")
    mouseMovingImg= loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseInspectImg= loadAnimation("images/mouse4.png")
    gardenImg= loadAnimation("images/garden.png")
    catSitImg= loadAnimation("images/cat1.png")
    catMovingImg= loadAnimation("images/cat2.png","images/cat3.png")
    catStopImg= loadAnimation("images/cat4.png")
    gardenImg= loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(500,400)
    garden.addImage("garden",gardenImg)

    

    mouse= createSprite(200,600)
    mouse.addAnimation("mouse",mouseInspectImg)
    mouse.addAnimation("mouseMoving",mouseMovingImg)
    mouse.addAnimation("mouseInspect",mouseInspectImg)
    mouse.scale=0.15
    

    cat= createSprite(800,600)
    cat.addAnimation("catSitting",catSitImg)
    cat.addAnimation("catMoving",catMovingImg)
    cat.addAnimation("CatStop",catStopImg)
    cat.scale=0.15
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    

      

    if(cat.width/2+mouse.width/2>cat.x-mouse.x
        &&cat.width/2+mouse.width/2>mouse.x-cat.x){
          console.log("ABC")
        mouse.changeAnimation("mouseInspect",mouseInspectImg)
        cat.changeAnimation("CatStop",catStopImg)
        
      }

      
      

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.x=cat.x-20
    
    cat.changeAnimation("catMoving",catMovingImg)
    mouse.changeAnimation("mouseMoving",mouseMovingImg)
}
}