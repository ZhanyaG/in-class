let x;

let distanceTravelled = 0;

function setup() {
  createCanvas(600, 600).parent("sketch-container-14");
  noStroke();
  millis();
  x = 0;
  textSize(150); // Large text to cover horizontally
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  distanceTravelled += deltaTime / 100;
  
  if (distanceTravelled >= width/50 * 7) {
    console.log("reset position");
    distanceTravelled -= width/50 * 7;
  }
  
  for(let i = 0; i < 70; i++) {
    let remainder = i % 7;
    
    if (remainder == 0) {
      fill("orange");
    } else if (remainder === 1) {
      fill("yellow");
    } else if (remainder === 2) {
      fill("rgb(14,248,14)");
    } else if (remainder === 3) {
      fill("#2196F3");
    } else if (remainder === 4) {
      fill("#3F51B5");
    } else if (remainder === 5) {
      fill("magenta");
    } else if (remainder === 6) {
      fill("red");
    }
    let posX = i * width / 50;
    rect(posX - distanceTravelled, 0, height);
  }
  
  //the text
  fill(0); 
  textStyle(BOLD);
  text("LOVE", width / 2, height / 2);
}