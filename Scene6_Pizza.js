class pizza {
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
    noSmooth();

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

class PizzaScene {
  
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
    noSmooth();
    push();
    background(163,86,58);
    textAlign(CENTER);
    textSize(24);
    fill(255);
    text("Prepare this pizza!", 280,80);
    pop();
    
    push();
    textAlign(RIGHT);
    textSize(15);
    fill(255,193,7);
    text("*mouse drag the slice, after you are done, press spacebar", 550,380);
    pop();
  
   push();
   image(photoPlate,180,130,220,200); 
   pop();
    
   push();
   image(pizzaPhoto,110,60,350,350); 
   pop();
    
    // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);

  image(photoPizza, x, y, w, h);

    }


  exitScene() {
    
  }
  
  keyPressed() {
    if (key === " ") {
      switchScenes(ovenScene); 
    }
  }

  keyReleased() {
    
  }

  mousePressed() {
    
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
