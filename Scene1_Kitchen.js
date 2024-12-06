const spriteSizeX = 32;
const spriteSizeY = 49;

class KitchenCharacter {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    
    this.startX = startPosX;
    this.startY = startPosY;
    
    this.speed = charSpeed;
    
    this.size = 4;
    this.currentColor = color(0);
    
    this.moveDir = "";
    
    this.moving = false;
    
    this.hasEnteredScene = false;
  
  }
  
  resetPosition() {
    this.x = this.startX;
    this.y = this.startY;
    }
  
  move(amtX, amtY) {
    this.x += amtX * this.speed;
    this.y += amtY * this.speed;
  }
  
  enterScene() {
  this.myCharacter.resetPosition(150, 20); 
  this.hasEnteredScene = true;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.move(-1, 0);
      this.moveDir = "left";
      this.moving = true;
    } 
    else if (keyIsDown(RIGHT_ARROW)) {
      this.move(1, 0);
      this.moveDir = "right";
      this.moving = true;
    } 
    else if (keyIsDown(DOWN_ARROW)) {
      this.move(0, 1);
      this.moveDir = "down";
      this.moving = true;
    } 
    else if (keyIsDown(UP_ARROW)) {
      this.move(0, -1);
      this.moveDir = "up";
      this.moving = true;
    } else {
      this.moving = false;
    }
  }
  
  display() {
    push();
      noSmooth();
    
      switch (this.moveDir) {
        case "left":
          image(
              walkLeftSprites[this.moving ? idx : 0],
              this.x, this.y,
              spriteSizeX * this.size,
              spriteSizeY * this.size
            );
          break;
        case "right":
          image(
            walkRightSprites[this.moving ? idx : 0],
            this.x, this.y,
            spriteSizeX * this.size,
            spriteSizeY * this.size
          );
          break;
        case "up":
          image(
            walkUpSprites[this.moving ? idx : 0],
            this.x, this.y,
            spriteSizeX * this.size,
            spriteSizeY * this.size
          );
          break;
        case "down":
          image(
            walkDownSprites[this.moving ? idx : 0],
            this.x, this.y,
            spriteSizeX * this.size,
            spriteSizeY * this.size
          );
          break;
        default:
          image(walkDownSprites[0],
            this.x, this.y,
            spriteSizeX * this.size,
            spriteSizeY * this.size
          );
          break;
      }
    
    pop();
  }
  
  exitScene() {  
  }
}

class KitchenScene {
  
  constructor() {
    this.myCharacter = new KitchenCharacter(15, 150, 20);
    // this.hasEnteredScene = false;
  }
  
  
  enterScene() {
    // this.myCharacter.x = 150;
    // this.myCharacter.y = 100;
    // this.hasEnteredScene = true;
  }

  
  update() {
    this.myCharacter.update();
  }

  display() {
    
    this.drawBackground();
    this.myCharacter.display();
    this.drawForeground();
    
    if (this.myCharacter.x >=15 &&
    this.myCharacter.x <= 16 &&
    this.myCharacter.y >= 150 &&
    this.myCharacter.y <= 155
       ) {
      // text("use arrow keys to walk to oven")
    push();
      textSize(25);
    fill(255);
    stroke(165,42,42);
    strokeWeight(4);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Welcome to Lulu's kitchen!", 315, 270);
      pop();
      
        push();
      textSize(15);
    fill(255, 20, 147);
    stroke(255);
    strokeWeight(4);
    textAlign(CENTER);
    textStyle(BOLD);
    text("(Mouse press and use arrow keys to walk to oven)", 315, 290);
      pop();
   }
   else {
   
   }
    
    if (this.myCharacter.x >= 200 &&
    this.myCharacter.x <= 200+250 &&
    this.myCharacter.y >= 50 &&
    this.myCharacter.y <= 50+100
       ) {
      // text("press spacebar")
    push();
      textSize(25);
    fill(255);
    stroke(165,42,42);
    strokeWeight(4);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Press spacebar", 315, 270);
      pop();
      
      push();
      textSize(15);
    fill(255, 20, 147);
    stroke(255);
    strokeWeight(4);
    textAlign(CENTER);
    textStyle(BOLD);
    text("(Start following all the text instructions)", 315, 290);
      pop();
   }
   else {
   
   }
  }
  
  drawBackground() {
    // drawing background
    background(100);
    
    push();
      image(photoStove, 0,0, 600, 300); 
    pop();
  
    
  }
  
  drawForeground() {
    push();
      image(photoTable,90,200, 450,200); 
    pop();
  }
  
  // this is called any time you switch to a new scene
  exitScene() {
    
  }

  
  keyPressed() {
    if (key === " ") {
      switchScenes(menuScene);
    }
    if (key === "r" || key === "R") {
      this.resetScene();
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