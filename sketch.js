var cat, mouse, catsittingImg, mousesittingImg, scene, sceneImg;
var catMoving, mouseTeasing, ob1, ob2;
var catHappy, mouseHappy;



function preload() {
    //load the images here
    sceneImg = loadImage("garden.png");
    catsittingImg = loadImage("cat1.png");
    mousesittingImg = loadImage("mouse1.png");
    catMoving = loadAnimation("cat2.png","cat3.png");
    mouseTeasing = loadAnimation("mouse2.png","mouse3.png");
    catHappy = loadImage("cat4.png");
    mouseHappy = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    scene = createSprite(500,400,100,100);
    scene.addImage(sceneImg);


    cat = createSprite(700,650,20,20);
    cat.addImage("catmoving",catsittingImg);
    cat.scale=0.1;

    mouse = createSprite(200,650,20,20);
    mouse.addImage("mouseTeasing",mousesittingImg);
    mouse.scale=0.1;






}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    drawSprites();

    if(isTouching(cat, mouse) && cat.velocityX === -5){
        cat.addImage("catmoving",catHappy);
        cat.velocityX = 0;
        mouse.addImage("mouseTeasing", mouseHappy);
    
    }else{

        keyPressed();
    }
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyWentDown(LEFT_ARROW)){
        cat.addAnimation("catmoving",catMoving);
        cat.velocityX = -5;
        mouse.addAnimation("mouseTeasing",mouseTeasing);
    }

}

function isTouching(ob1, ob2){

    if(ob1.x - ob2.x < ob2.width /2 + ob1.width /2 && 
      
      ob2.x - ob1.x < ob2.width /2 + ob1.width /2 && 
      
      ob1.y - ob2.y < ob2.height /2 + ob1.height /2 && 
      ob2.y - ob1.y < ob2.height /2 + ob1.height /2){
  
      return true;
  
    } 
    
    else{
      return false;
    }
}