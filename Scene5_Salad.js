class tomatoe {
  constructor(png, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dragging = false;
    this.rollover = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  show() {

    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
      image(this.png, this.x-2.5, this.y-2.5, this.w + 5, this.h + 5);
    } else {
      this.rollover = false;
      image(this.png, this.x, this.y, this.w, this.h);
    }
  }

  show2() {
    image(this.png, this.x, this.y, this.w, this.h);
  }

  clicked() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;

    }

  }

  move() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }

  }
    
  released() {
    this.dragging = false;
}
  }

class SaladScene {
  
  constructor() {
    this.hasEnteredScene = false;
  }
  
  // this is called any time you enter this scene
  enterScene() {
    this.hasEnteredScene = true;
  }

  update(){
    
  }


  display() {
    //instructions
    push();
    background(158,167,78); // Set background color
    textAlign(CENTER);
    textSize(24);
    fill(255);
    text("Prepare yummy salad", 280,80);
    pop();
  
    push();
    textAlign(RIGHT);
    textSize(15);
    fill(146,24,24);
    text("*mouse drag the veggies, after you are done, press spacebar", 520,380);
    pop();
    
   push();
   noSmooth();
   photoBoard.resize(0,400);
   image(photoBoard,90,30); 
   pop();
  
   push();
    noSmooth();
   image(bowlPhoto,160,150,250,150); 
   pop();
  
   push();
   spoonPhoto.resize(0,70);
   image(spoonPhoto,mouseX,mouseY); 
   pop();
    
    // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
 
  

  stroke(0);

  image(tomatoSliced, x, y, w, h);
  image(choppedGarlic,x,y,w,h);
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
    if (mousePressed) {
      if (currentImage === photoGarlic) {
        currentImage = chopedGarlic;
      }
      else {
      currentImage = photoGarlic;
      }
    }
    
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;

    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}


  mouseReleased() {
     dragging = false;
  }

  mouseMoved() {
    
  }

  mouseDragged() {
    
  }

  mouseClicked() {
   
  }
}
