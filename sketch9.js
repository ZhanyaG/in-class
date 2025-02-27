let gif;
let font;
let points = [];
let r = 5; let angle = 0;

function preload() {
  font = loadFont("fonts/Roboto-Regular.ttf");
  gif= loadImage("bubble.gif");
}

function setup() {
  createCanvas(600, 600);
  points = font.textToPoints("Life", 50, 400, 300, {
    sampleFactor: 0.9,
    simplifyThreshold: 0
  });
  angleMode(DEGREES);
}

function draw() {
  background(201, 113, 55); 
  for (let i = 0; i < points.length; i++) {
    fill(164,240,252);
    ellipse(points[i].x + r * sin(angle + i * 125), points[i].y, 10, 10);
  }
  angle += 100;
  
  push();
  gif.resize(0,200);
  image(gif,mouseX,mouseY);
  pop();
}