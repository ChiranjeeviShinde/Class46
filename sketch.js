var boundary1,boundary2,boundary3,boundary4;
var p1,pImg,m1,mImg,n1,nImg,a1,aImg,A1,AImg,c1,cImg;
var hyphen,lineImg;
var pacman,pacmanImgRight,pacmanImgLeft,pacmanImgUp,pacmanImgDown;

function preload(){
  aImg = loadImage("alphabets/a2.png");
  cImg = loadImage("alphabets/c2.png");
  mImg = loadImage("alphabets/m2.png");
  nImg = loadImage("alphabets/n2.png");
  pImg = loadImage("alphabets/p2.png");
  lineImg = loadImage("line.jfif");
  line1Img = loadImage("line2.jpg");
  line2Img = loadImage("line3.jpg");
  pacmanImg = loadImage("pacmanRight/pacman-0.png");
  pacmanImgRight = loadAnimation("pacmanRight/pacman-1.png","pacmanRight/pacman-2.png","pacmanRight/pacman-3.png","pacmanRight/pacman-0.png");
  pacmanImgLeft = loadAnimation("pacmanLeft/pacman-1.jpg","pacmanLeft/pacman-2.jpg","pacmanLeft/pacman-3.jpg","pacmanLeft/pacman-0.jpg");
  pacmanImgUp = loadAnimation("pacmanUp/pacman-1.png","pacmanUp/pacman-2.png","pacmanUp/pacman-3.png","pacmanUp/pacman-0.png");
  pacmanImgDown = loadAnimation("pacmanDown/pacman-1.png","pacmanDown/pacman-2.png","pacmanDown/pacman-3.png","pacmanDown/pacman-0.png");
}

function setup() {
  createCanvas(1400,600);
  
  //boundary
  boundary1 = createSprite(700,20,1300,20);
  boundary1.shapeColor = "red";
  boundary1.addImage(line1Img);
  boundary2 = createSprite(700,580,1300,20);
  boundary2.shapeColor = "red";
  boundary2.addImage(line1Img);
  boundary3 = createSprite(20,300,20,500);
  boundary3.shapeColor = "red";
  boundary3.addImage(line2Img);
  boundary4 = createSprite(1380,300,20,500);
  boundary4.shapeColor = "red";
  boundary4.addImage(line2Img);

  //letter P
  p1 = createSprite(160,240,10,100);
  p1.addImage(pImg);
  p1.scale = 0.3;
  
  //letter A 
  a1 = createSprite(330,240,10,100);
  a1.addImage(aImg);
  a1.scale = 0.3;
  
  //letter C
  c1 = createSprite(520,240,10,100);
  c1.addImage(cImg);

  //-
  hyphen = createSprite(680,240,70,10);
  hyphen.addImage(lineImg);
  hyphen.scale = 0.4;
  //letter M
  m1 = createSprite(850,235,10,100);
  m1.addImage(mImg);
  //letter A
  A1 = createSprite(1050,235,10,100)
  A1.addImage(aImg);
  A1.scale = 0.3;
  //letter N
  n1 = createSprite(1250,235,10,100);
  n1.addImage(nImg);
  //pacman
  pacman = createSprite(100,100,20,20);
  pacman.addImage("eating",pacmanImg);
  pacman.scale = 0.25;

}

function draw() {
  background(0); 

  textSize(20);
  fill(255);
  text(mouseX + "," + mouseY,100,100);

  //pacman controls
  if(keyIsDown(RIGHT_ARROW)){
    pacman.x+=10;
    pacman.addAnimation("eating",pacmanImgRight);
  }

  if(keyIsDown(LEFT_ARROW)){
    pacman.x-=10;
    pacman.addAnimation("eating",pacmanImgLeft);
  }
  if(keyIsDown(UP_ARROW)){
    pacman.y-=10;
    pacman.addAnimation("eating",pacmanImgUp);
  }

  if(keyIsDown(DOWN_ARROW)){
    pacman.y+=10;
    pacman.addAnimation("eating",pacmanImgDown);
  }

  drawSprites();
}