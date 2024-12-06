 class TomatoeScene {
  
  constructor() {
    this.hasEnteredScene = false;
  }
  
  enterScene() {
    this.hasEnteredScene = true;
  }


  update() {

    }
  

  display() {
     background(163,31,31); 
  
    noSmooth();
    textAlign(CENTER);
    textSize(24);
    fill(255);
    text("Press the mouse to chop!", 290,80);
    
    push(); 
    stroke(90,9,9);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(17);
     fill(250,236,236);
    text("*press spacebar for the next", 450,380);
    pop();
  
  push();
  photoBoard.resize(0,400);
  image(photoBoard,90,30); 
  pop();
  
  
  push();
   image(currentImage2,190,150,200,150); 
  pop();
  
   push();
   photoKnife2.resize(0,250);
   image(photoKnife2,mouseX,mouseY); 
   pop();

}

  
  exitScene() {
    
  }

  
  keyPressed() {
    if (key === " ") {
      switchScenes(menuScene);
    }
  }

  keyReleased() {
    
  }

  mousePressed() {
    // Switch between photoTomatoe and choppedTomatoe
     if (mousePressed) {
      if (currentImage2 === photoTomatoe) {
        currentImage2 = choppedTomatoe;
      } 
      else {
        currentImage2 = photoTomatoe;
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