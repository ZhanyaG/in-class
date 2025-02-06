//town growth in decades (in 60 seconds) by change of different seasons ( winter, summer / spring, autumn) 

//move the mouseY up and down to see the changes of the seasons

let timer = 0;
let size_ = 150;

function setup() {
  createCanvas(600, 600).parent("sketch-container-3");
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  
  // draw background by changing to 3 different seasons
  if(mouseY<=150)
  {
    background(61,184,240);
    console.log('winter')
    let fc =  frameCount;
      console.log(fc);
  }
  else if (mouseY>150 && mouseY<=300)
  {
    background(255,165,0);
    console.log('autumn')
  }
   else if (mouseY>300)
  {
    background(0,128,0);
    console.log('summer / spring')
  }

    //timer for a minute, on the ground
  let sec = second();
  
  {
  push();
  angleMode(DEGREES);
  translate(300,300);
  rotate(-90);
  stroke(255);
  fill(255);
  let secondAngle = map(sec, 0, 60, 0, 610);
  rect(-300, -300, 40, secondAngle);
  pop();
   }
  
  // increment timer
  timer += deltaTime;
  
  // if two seconds have passed
  if (timer>3000) {
    
    // increase size_
    size_+=30
    
    // if size_ is too big...
    if (size_>250)
    {
      // reset size_ to 150
      size_=150
    }
    // reset timer
    timer = 0;
  }
  // draw the growth of the city

  //ground
  fill(22,56,22);
    ellipse(300, size_+200, size_+300, size_+30);
  
  //gray square
   fill(67,98,112);
  rect(340, 320, size_-170, -130);
  
  //square purple
  fill(111,111,182);
  rect(190, 370, size_-160,-124);
 
   //redish square
   fill(170,120,120);
  rect(430, 360, size_-155,-120);
  
  //square white blue
   fill(102,159,185);
  rect(390, 390, size_-145,-120);
  
  //square blue
 fill(0,0,255);
  rect(230, 410, size_-100,-150);
  
  //square lilac
  fill(172,172,245);
  rect(290, 430, size_-135,-140);
  
  //sun
  fill(255,255,1);
    circle(500, 90, size_-90);
}