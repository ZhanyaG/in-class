let x;
let distanceTravelled = 0;

function setup() {
  createCanvas(600, 600).parent("sketch-container-5");
  noStroke();
  millis();
  x = 0;
}

function draw() {
  background(0);
 push();
  //adding time
  distanceTravelled += deltaTime /300;
  
  if (distanceTravelled >= width/50*2) {
    console.log("reset position");
    distanceTravelled -= width/100*2;
  }
  
  //making an optical illusion
  for(let i =0; i<100; i++) {
   let remainder = i%2;
    
    // console.log(remainder);
    if (remainder == 0) {
      fill(245, 221, 154);
    }
    else if (remainder === 1){
      fill(209, 155, 4);
    }
    
    rect(i*width /100,0,width/200,height/50);
    translate(300,300);
    rotate(90);
   
    //making it to move infinitely
  let posX = i*width /100;
    rect(posX - distanceTravelled, 0, height);
  }
  pop();
  
  //adding text (a description of the optical illusion)
  push();
  textSize(25);
  fill(168, 136, 7);
  stroke(0);
  strokeWeight(2);
   textFont('Fantasy');
  text('Circular Caramel Candy', 115, 70);
  pop();
  
  //tongue -> a kid eating a candy with a tongue
  push();
   translate(300,300);
    rotate(90);
  stroke(5)
  strokeWeight(2);
  fill(232, 137, 145)
   ellipse(30, -360, 280, 450);
  pop();
  
  push();
   translate(300,300);
    rotate(90);
  fill(0);
    // line(20, -350, 55, 55);
  rect(20, -350, 5, 55,50);
  pop();
  
}