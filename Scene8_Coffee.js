 class CoffeeScene {
  
  constructor() {
    this.coffeeColor = 255;
    this.hasEnteredScene = false;
  }
  
  // this is called any time while entering this scene, so coffee pot will be always white
  enterScene() {
    this.coffeeColor = 255; 
    this.hasEnteredScene = true;
  }

  
  update() {
  
  }

  display() {
push();
    background(242, 216, 131); 
    textAlign(CENTER);
    stroke(0);
    strokeWeight(1.5);
    textSize(24);
    fill(227,160,228);
    text("Pour a coffee!", 300,80);
    noSmooth();
    noStroke();
    angleMode(DEGREES);
    
  push();
    textAlign(RIGHT);
    textSize(15);
    fill(135, 109, 69);
    text("*mouse press to fill, after that press spacebar", 550,390);
    pop();

  push();
  translate(0,150);
     // Pink rectangle
  fill(227,160,228);
  rect(...rectParams.slice(0, 4)); 
  
    // Bottom arc
  arc(212.5, 200, 125, 75, 360, 180);
  
     // Pink ellipse
  ellipse(270, 150, 85, 100); 
  
    // Top arc
  fill(227,160,228);
  arc(212.5, 105, 125, 75, 180, 360);
  
     // White ellipse
  fill(this.coffeeColor); 
  ellipse(212.5, 110, 107.5, 57.5);
  
    // Yellow arc
  fill(242, 216, 131); 
  arc(275, 150, 55, 70, 270, 90);
    pop();
    
   push();
   image(coffeePhoto,mouseX,mouseY, 250, 250); 
   pop();
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
    this.coffeeColor = color(135, 109, 69); 
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
