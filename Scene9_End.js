class EndScene {
  
  constructor() {
    this.hasEnteredScene = false;
  }
  
  // this is called any time you enter this scene
  enterScene() {
    this.hasEnteredScene = true;
  }

  // update and display run every frame when this is the active scene,
  // one after the other
  update(){
    
  }


  display() {
    push();
    background(173,142,131); 
    stroke(90,9,9);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(24);
     fill(250,236,236);
    text("Yay! Bon appetite!", 300,80);
    pop();
  
    push(); 
    stroke(90,9,9);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(17);
     fill(250,236,236);
    text("*press 'R' to start over", 450,380);
    pop();
    
  push();
  noStroke();
  fill(90,9,9);
  rect(80, 100, 450, 250, 10); 
  image(pizzaKitchen,170,120,270,270); 
  pop();
  
  image(coffeeBrown,390,120,100,100);
  
  image(saladKitchen,100,120,150,120);
  
  image(forkPhoto,360,220,100,100);

  }
  
  exitScene() {
    
  }

  
  keyPressed() {
      if (key === "r" || key === "R") {
      resetGame(); // Reset scene on "R" key press
      console.log("Scene reset!");
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
