class Question1{

    constructor() {
     
      this.button1 = createButton('Play');
      this.button2 = createButton('Play');
      this.button3 = createButton('Play');

      this.button4 = createButton('Play');
      this.button5 = createButton('Play');
      this.button6 = createButton('Play');

      this.button7 = createButton('Play');
      this.button8 = createButton('Play');
      this.button9 = createButton('Play');

      this.question1 = createElement('h3');
      this.question2 = createElement('h3');
      this.question3 = createElement('h3');


      this.title = createElement('h2');


      this.correct1 = createElement('h2');
      this.correct2 = createElement('h2');
      this.correct3 = createElement('h2');

      this.incorrect = createElement('h2');

      this.congrats = createElement('h2');
      

      
     
    }
    hide(){
      
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();

      this.button4.hide();
      this.button5.hide();
      this.button6.hide();

      this.question1.hide();

      this.correct1.hide();
      this.correct2.hide();
      this.correct3.hide();
      
      
    }
  
    display(){
      
      this.title.html("RGB Color Picker Game");
      this.title.position(displayWidth/2 -90, 0);

      this.button1.position(displayWidth/2 -30, displayHeight/2);
      this.button2.position(displayWidth/2+130, displayHeight/2);
      this.button3.position(displayWidth/2-190, displayHeight/2);

      this.button1.style("background-color: rgb(34,139,34);")
      this.button2.style("background-color: red;")
      this.button3.style("background-color: blue;")

      this.question1.html("What color do you think is rgb(34,139,34)?");
      this.question1.position(displayWidth/2-130,200);
  
     
      
  
      this.button1.mousePressed(()=>{
       
       
       
        this.correct1.html("That is the correct answer, try this question!");
         this.correct1.position(displayWidth/2-100, displayHeight/2+200);

         score++;

        
        gameState =2;
      });

      this.button2.mousePressed(()=>{


        this.incorrect.html("That is the incorrect answer, try again!");
        this.incorrect.position(displayWidth/2-100, displayHeight/2+200);

        score = 0

 });

 this.button3.mousePressed(()=>{


  this.incorrect.html("That is the incorrect answer, try again!");
  this.incorrect.position(displayWidth/2-100, displayHeight/2+200);

  score = 0

});
  
    }

    display1(){
        
      this.title.html("RGB Color Picker Game");
      this.title.position(displayWidth/2 -90, 0);

      
    
       
        this.incorrect.hide();

        this.button1.hide();
        this.button2.hide();
        this.button3.hide();

        this.question1.hide();

        this.question2.html("What color do you think is rgb(84,61,63)?");
       this.question2.position(displayWidth/2-130,200);

      this.button4.position(displayWidth/2 -30, displayHeight/2);
          this.button5.position(displayWidth/2+130, displayHeight/2);
          this.button6.position(displayWidth/2-190, displayHeight/2);


          this.button4.style("background-color: orange;")
          this.button5.style("background-color: rgb(84,61,63);")
          this.button6.style("background-color: yellow;");


          this.button4.mousePressed(()=>{
           this.correct1.hide();

           score = 0

            this.incorrect.html("That is the incorrect answer, try again!");
            this.incorrect.position(displayWidth/2-100, displayHeight/2+200);
    
     });
       
        
    
        this.button5.mousePressed(()=>{
         
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          
         
          this.correct2.html("That is the correct answer, try this question!");
         this.correct2.position(displayWidth/2-100, displayHeight/2+200);
         
          

         score++;
          gameState = 3;
  
          
  
         
        });


        this.button6.mousePressed(()=>{

          this.correct1.hide();
          this.incorrect.html("That is the incorrect answer, try again!");
          this.incorrect.position(displayWidth/2-100, displayHeight/2+200);

          score = 0
        
        });
    
      }

      display2(){
        
        this.title.html("RGB Color Picker Game");
        this.title.position(displayWidth/2 -90, 0);
  
        
      
         
          this.incorrect.hide();
  
          this.button4.hide();
          this.button5.hide();
          this.button6.hide();
  
          this.question2.hide();
  
          this.question3.html("What color do you think is rgb(85,154,154)?");
         this.question3.position(displayWidth/2-130,200);
  
        this.button7.position(displayWidth/2 -30, displayHeight/2);
            this.button8.position(displayWidth/2+130, displayHeight/2);
            this.button9.position(displayWidth/2-190, displayHeight/2);
  
  
            this.button7.style("background-color: rgb(85,154,154);")
            this.button8.style("background-color: purple;")
            this.button9.style("background-color: aqua;");
  
  
            this.button8.mousePressed(()=>{
             this.correct2.hide();
  
              this.incorrect.html("That is the incorrect answer, try again!");
              this.incorrect.position(displayWidth/2-100, displayHeight/2+200);

              score = 0
      
       });
         
          
      
          this.button7.mousePressed(()=>{
           
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            
           score++;
            this.correct2.html("That is the correct answer");
           this.correct2.position(displayWidth/2-100, displayHeight/2+200);
           
            
  
            gameState = 4;
    
            
    
           
          });
  
  
          this.button9.mousePressed(()=>{
  
            this.correct.hide()
            this.incorrect.html("That is the incorrect answer, try again!");
            this.incorrect.position(displayWidth/2-100, displayHeight/2+200);

            score = 0
          
          });
      
        }

        display3(){

          this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.title.hide();

            this.question3.hide();
            this.correct1.hide();

            this.correct2.hide();

          this.congrats.html("You Win!");
          this.congrats.position(displayWidth/2-100, displayHeight/2+200);

        }
      }