
let str = 'life life life life life life life life life';

let startAngle =    0;     // angle where text should start
let distanceAngle = 350;   // how far (in degrees) text will go

let radius;                // set dynamically in setup()
let font;


function preload() {
  font = loadFont('assets/CaslonSemiBoldItalic.otf');
}


function setup() {
  createCanvas(600,600).parent("sketch-container-12");
  
  radius = min(width,height) / 3;
  
  // font size is dynamic
  textSize(radius/4);
  textFont(font);
  textAlign(CENTER, BASELINE);
}


function draw() {
  background(0,150,255);
  
  // the circle our text will go around
  noFill();
  stroke(0,150,255);
  circle(width/2,height/2, radius*2);
  
  // calculate the angle between each letter
  let angleBetweenLetters = radians(distanceAngle) / str.length;
  
  // display the text!
  push();
  translate(width/2, height/2);        
  rotate(radians(startAngle));         // rotate to where text starts
  for (let i=0; i<str.length; i++) {   // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters);   // rotate to angle
    translate(0,-radius);              // and translate to edge of circle
    fill(255);
    noStroke();
    text(str[i], 0,0);                 // draw letter at location
    pop();
  }
  pop();
}
 //to change with the window size
// function windowResized() {
//   setup();


