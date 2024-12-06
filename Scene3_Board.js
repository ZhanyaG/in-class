class BoardScene {
  
  constructor() {
    this.hasEnteredScene = false;
  }
  
 
  enterScene() {
    this.hasEnteredScene = true;
  }

 
  update(){
    
  }


  display() {
    //instructions
    push();
    background(231, 169, 231); // Set background color
    textAlign(CENTER);
    textSize(24);
    fill(255);
    text("Press the mouse to chop!", 290,80);
    pop();
    
     push(); 
    stroke(90,9,9);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(17);
     fill(250,236,236);
    text("*press spacebar for the next", 450,380);
    pop();
  
    //setting with photos
  push();
  noSmooth();
  photoBoard.resize(0,400);
  image(photoBoard,90,30); 
  pop();
  
  
  push();
  noSmooth();
   image(currentImage,160,150,250,150); 
    // Display the current image
  pop();
  
   push();
   noSmooth();
   photoKnife.resize(0,250);
   image(photoKnife,mouseX,mouseY); 
   pop();
  }
  
  exitScene() {
    
  }

  
  keyPressed() {
    if (key === " ") {
      switchScenes(tomatoeScene); 
    }
  }

  keyReleased() {
    
  }
//function: chopping the garlic 
  mousePressed() {
    if (mousePressed) {
      if (currentImage === photoGarlic) {
        currentImage = chopedGarlic;
      }
      else {
      currentImage = photoGarlic;
      }
    }
     
  }

  mouseReleased() {
    
  }

  mouseMoved() {
    
  }

  mouseDragged() {
    
  }

  mouseClicked() {
   
  }
}
