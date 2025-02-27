let font;
let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let letters = [];
let num = 50;
let x; 
let y = 400; 
let w = 70; 
let h = 5;

function preload() {
  font = loadFont("fonts/Magules.ttf");
}

function setup() {
  createCanvas(600, 600).parent("sketch-container-11");
  for (let i=0; i<num; i++) {
    letters[i] = new Letter();
  }
  
}

function draw() {
  background(142,142,235);
  fill(0);
  x = mouseX;
  rect(x, y, w, h);
  
  for (let i=0; i<num; i++) {
    letters[i].update(x, y, w, h);
    letters[i].display();
  }
  
  
}