 class OvenScene {
  
  constructor() {
    //timer for the oven to lit up
    this.timer = 0;
    this.timeToSwitchObject = 2;
    this.hasEnteredScene = false;
  }
  
  // this is called any time you enter this scene, by resetting positions
  enterScene() {
    this.timer = 0;
    this.hasEnteredScene = true;
  }


  update() {
   this.timer += deltaTime/1000;
    if (this.timer >= this.timeToSwitchObject) {

       objectVisible = true;
    }
  }

  display() {
    background(179,146,134); 
  
    push();
    textAlign(CENTER);
    textSize(24);
    stroke(255,0,0);
    strokeWeight(3)
    fill(255);
    text("Wait for pizza!!", 300,40);
    pop();
    
    push();
    textAlign(RIGHT);
    textSize(15);
    fill(255,193,7);
    text("*after you are done, press spacebar", 550,380);
    pop();
  
  push();
    angleMode(DEGREES);

  // Oven body
  fill(238, 232, 205); 
  noStroke();
  rect(150, 50, 300, 300, 10); 

  // Oven window
  fill(90, 90, 90); 
  rect(190, 150, 220, 150, 10); 

  // Knob properties
  let knobSize = 20;
  fill(180); 
  stroke(0); 
  strokeWeight(2);

  // Draw each knob and its indicator line
  for (let i = 0; i < 4; i++) {
    let x = 190 + i * 70; 
    let y = 100;          

    // Draw knob
    ellipse(x, y, knobSize, knobSize);

    // Draw indicator line on knob
    line(x, y - knobSize / 4, x, y - knobSize / 2);
  }

  // Bottom handle
  fill(160); 
  rect(240, 135, 120, 15, 5); 
  pop();

  push();
  // turn on the oven
  if (objectVisible) {
  fill(243,200,71); 
  rect(190, 150, 220, 150, 10); 
  }
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