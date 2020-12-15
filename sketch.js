var movingrec
var fixedrec
var normalrec
var stillrec




function setup() {
  createCanvas(800,400);
  
  movingrec=createSprite(200,200,100,100);
  fixedrec=createSprite(200,200,100,100);
  normalrec=createSprite(300,300,100,100);
  stillrec=createSprite(600,200,100,100);
}

function draw() {
  background("Orange");  
  drawSprites();
  stillrec.x=mouseX
  stillrec.y=mouseY

  

  console.log(movingrec.x - fixedrec.x)
  console.log(fixedrec.width/2 + movingrec.width/2)

  
  
  if(myisTouching(stillrec,normalrec)){
    normalrec.shapeColor="red";
    stillrec.shapeColor="red";
  }
  else{
   normalrec.shapeColor="green";
   stillrec.shapeColor="green";
  }




  
}
