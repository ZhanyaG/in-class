//press mouse 
var words = ['Life'];

var index = 0;
var horiz;
var vert;

function setup() {
  createCanvas(600, 600).parent("sketch-container-13");
  textSize(150);
  textAlign(CENTER, CENTER);
  horiz = width / 2;
  vert = height / 2;
}

function draw() {
  background(232, 48, 134);
  fill(random(255), random(255), random(255)); // Random color for text
  text(words[index], horiz, vert);
}

function mousePressed() {
  index = index + 1;
  horiz += 50;
  vert += 50;
  if (index > words.length - 1) {
    index = 0;
  }
  if (horiz > width) {
    horiz = width / 2;
  }
  if (vert > height) {
    vert = height / 2;
  }
}
