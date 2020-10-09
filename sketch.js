

function preload () {

}

var gameState = 1;

var score = 0;

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight+50 );
  Question1Section = new Question1();
  
}

function draw () {
  background("white");

  text("Score  " + score, width-300, 50)

  if (gameState ===1){
  Question1Section.display();
  } 

  if (gameState ===2){
    Question1Section.display1();
    } 

    if (gameState ===3){
      Question1Section.display2();
      } 

      if (gameState ===4){
        Question1Section.display3();
        } 

   

  drawSprites();
}

