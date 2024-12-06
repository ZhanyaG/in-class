function drawClouds(posX, posY, widthE, heightE) {
  push();
  noStroke();
  ellipse(posX, posY, widthE, heightE);
  ellipse(posX + 15, posY - 10, widthE + 5, heightE);
  ellipse(posX + 25, posY, widthE + 15, heightE);
  pop();
}

class MenuScene {
  constructor() {
    this.hasEnteredScene = false;
  }

  enterScene() {
    this.hasEnteredScene = true;
  }

  update() {}

  display() {
    background(255, 182, 193);
    image(menuImg, 45, -20, 500, 450);

    push();

    for (let i = 0; i < rectSizes.length; i++) {
      for (let j = 0; j < rectSizes[i]; j++) {
        drawClouds(120 + 105 * i, 430 - j * 115, 25, 25);
      }
    }
    pop();
//text for all the menu setting
    push();
    textSize(13);
    fill(0);
    noStroke();
    textAlign(LEFT);
    textFont("Italic");
    text("sushi", 118, 85);
    text("soup", 223, 85);
    text("cereals", 115, 200);
    text("beef", 330, 315);
    text("chicken", 215, 315);
    text("pasta", 433, 85);
    text("burger", 325, 200);
    text("desserts", 425, 315);

    push();
    noStroke();
    textStyle(BOLD);
    textAlign(LEFT);
    fill(240, 31, 213);
    text("veggies", 215, 200);
    text("salad", 330, 85);
    text("pizza", 120, 315);
    text("coffee", 433, 200);
    pop();

    pop();

    push();
    noStroke();
    textSize(20);
    fill(240, 31, 213);
    textAlign(LEFT);
    // textFont('Italic');
    text("Today's Lulu's", 128, 155);
    text("Special Menu", 350, 155);
    text("Mouse Click", 138, 265);
    text("only on pink text", 340, 265);
    pop();

    push();
    image(Next, 530, 15, 40, 40);
    pop();
    
  }

  exitScene() {}

  keyPressed() {
  }

  keyReleased() {}

  mousePressed() {
    //switch to veggies (board) Scene
    if (mouseX >= 210 && mouseX <=280 &&
        mouseY >= 180 && mouseY <= 210) {
      if (!boardScene.hasEnteredScene) {
        switchScenes(boardScene);
        return;
      }
     
    }

    // switch to salad scene
    if (mouseX >= 310 && mouseX <=380 &&
        mouseY >= 60 && mouseY <= 100)
    {
      if (!saladScene.hasEnteredScene) {
        switchScenes(saladScene);
        return;
      }
    }

    //switch to pizza scene
    if (mouseX >= 105 && mouseX <=165 &&
        mouseY >= 290 && mouseY <= 330) {
      if (!pizzaScene.hasEnteredScene) {
        switchScenes(pizzaScene);
        return;
      }
    }

    //switch to coffee scene
    if (mouseX >= 410 && mouseX <=480 &&
        mouseY >= 180 && mouseY <= 210) {
       if (!coffeeScene.hasEnteredScene) {
        switchScenes(coffeeScene);
        return;
      }
    }

    //switch to the end of the game by button on the top
    if (mouseX >= 520 && mouseX <=570 &&
        mouseY >= 30 && mouseY <= 70) {
      if (!endScene.hasEnteredScene) {
        switchScenes(endScene);
        return;
      }
    }
  }

  mouseReleased() {}

  mouseMoved() {}

  mouseDragged() {}

  mouseClicked() {}
}