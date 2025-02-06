function setup() {
  createCanvas(400, 400).parent("sketch-container-1");
  textAlign(CENTER);
  textSize(10);
  fill(250);
  blendMode(BLEND);
  noStroke();

}


  function draw() {
    
  // changing the color of background
    background(30,46,31);
    
    //green dark shadow#1 
    push();
    translate(200,200);
    fill(68, 55, 17);
    circle(0, 0, 320);
    pop();
    
    //second darker brown shadow#2
    push();
     translate(200,200);
    fill (109, 68, 28);
    circle(0, 0, 280);
     pop();
    
    //first brown shadow#3
    push();
     translate(200,200);
    fill(	129, 81, 33	);
    circle(0, 0, 250);
     pop();
 
    //the ring itself with inner shadow
    push();
    translate(200,200);
    fill(190,120,48);
    stroke(255,215,0);
    strokeWeight(30);
    circle(0,0,150);
    pop();
    
    //put the text "Ash nazg thrakatulûk agh burzum-ishi krimpatul"
   // a letter #1
    push();
  textSize(14);
   translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('a', 50, 30);
    pop();
    
    // a letter #2
    push();
    textSize(14);
   translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('s', 60, 28);
    pop();
    
    //letter 3
    push();
    textSize(14);
   translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('h', 70, 26);
    pop();
    
    //letter 3
    push();
    textSize(14);
   translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('n', 80, 20);
    pop();

    //letter 3
    push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('a', 90, 10);
    pop();
    
    //letter 4
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('z', 100, 0);
    pop();
    
    //letter 5
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('g', 110, -10);
    pop();
    
    //letter 6
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
  text('t', 115, -25);
    pop();
    
    //letter 7
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('h', 120, -40);
    pop();
    
    //letter 8
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('r', 120, -55);
    pop();
    
    //letter 9
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('r', 120, -55);
    pop();
    
    //letter 10
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('a', 118, -75);
    pop();
    
    //letter 11
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('k', 110, -87);
  textAlign(RIGHT);
    pop();
    
    //letter 12
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('a', 100, -100);
  textAlign(RIGHT);
    pop();
    
    //letter 13
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('t', 90, -105);
  textAlign(RIGHT);
    pop();
    
    //letter 14
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('u', 80, -110);
  textAlign(RIGHT);
    pop();
    
    //letter 15
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('u', 80, -110);
  textAlign(RIGHT);
    pop();
    
    //letter 16
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
   text('l', 70, -110);
  textAlign(RIGHT);
    pop();
    
    //letter 17
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
   text('û', 60, -115);
  textAlign(RIGHT);
    pop();
    
  //letter 18
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
   text('k', 50, -115);
  textAlign(RIGHT);
    pop();
    
    //letter 19
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('a', 40, -115);
  textAlign(RIGHT);
    pop();
    
     //letter 20
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('g', 30, -115);
  textAlign(RIGHT);
    pop();
    
    //letter 21
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('h', 20, -112);
  textAlign(RIGHT);
    pop();
    
    //letter 22
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('b', 10, -110);
  textAlign(RIGHT);
    pop();
    
    //letter 23
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('u', 0, -105);
  textAlign(RIGHT);
    pop();
    
    //letter 24
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('r', -10, -98);
  textAlign(RIGHT);
    pop();
    
    //letter 25
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('z', -20, -88);
  textAlign(RIGHT);
    pop();
    
    //letter 26
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('u', -25, -77);
  textAlign(RIGHT);
    pop();
    
    //letter 27
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('m', -30, -65);
  textAlign(RIGHT);
    pop();
    
    //letter 28
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('-', -35, -50);
  textAlign(RIGHT);
    pop();
    
     //letter 29
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('i', -33, -35);
  textAlign(RIGHT);
    pop();
    
    //letter 30
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('s', -25, -15);
  textAlign(RIGHT);
    pop();
    
    //letter 31
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('h', -15, -2);
  textAlign(RIGHT);
    pop();
    
    //letter 32
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('i', -5, 15);
  textAlign(RIGHT);
    pop();
    
    //letter 33
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('k', 5, 20);
  textAlign(RIGHT);
    pop();
    
    //letter 34
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('r', 15, 25);
  textAlign(RIGHT);
    pop();
    
    //letter 35
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('i', 25, 30);
  textAlign(RIGHT);
    pop();
    
    //letter 36
     push();
    textSize(14);
    translate(230,255);
    fill(204, 112, 0);
    rotate(225);
  textAlign(RIGHT);
    text('m', 38, 31);
  textAlign(RIGHT);
    pop();
}