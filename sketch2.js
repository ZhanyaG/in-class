// press the mouse in different places (move the mouse and press into it) of canvas to see changes
//User-defined variables
let size = 30
let Yellow = 255;
let Red = 255;
let Blue = 255;
let size2 = 10;
let size3 = 20;
let size4 = 10;


function setup() {
  createCanvas(400, 400).parent("sketch-container-2");
  // size = x+50
   angleMode(DEGREES);

}

function draw() {
  background(162,162,224);
  // Draw a face at (x,y) with color c
push();
  fill(Yellow,Red,Blue);
  circle(mouseX, mouseY, size);
  pop();
  
  
  // Draw big left eye

  let leftX = 150;
  let leftY = 200;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  //left eye
  push();
  fill(0);
  translate(-15,-5)
  circle(mouseX,mouseY,size2);
  pop();
  
  
  let leftX2 = 150;
  let leftY2 = 200;

  // Calculate angle between left eye and mouse
  let leftAngle2 = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 100, 50);
  rotate(leftAngle);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();
  

  // Draw right eye

  let rightX = 250;
  let rightY = 200;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  
  //small right eye
  push();
  fill(0);
  translate(15,-5)
  circle(mouseX,mouseY,size2);
  pop();
  
  //nose
  push();
  fill(0);
  circle(mouseX,mouseY,size4);
  pop();
  
  //mouth
   push();
  fill(0);
  arc(mouseX, mouseY, 40, 40, 40, 140, CHORD);
  pop();
  
  //big right eye
  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 100, 50);
  rotate(rightAngle);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();
}
function mousePressed() {
  size = random (50, 120);
  Yellow = random(0,255);
  Red = random(0,255);
  Blue = random(0,255);
  size2 = random (0,10);
  size3 = random (0,20);
}