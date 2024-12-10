const canvas = (400, 600); 
let rad = 5;
      
function setup() {
  createCanvas(400, 600).parent("sketch-container-4");
  angleMode(DEGREES);
  
}

function draw() {
  background(0);

  //background with 3 equal parts
  fill(157,238,157);
  rect(0,0,canvas);
  fill(103,196,103);
  rect(0,200,canvas);
  fill(86,146,86);
  rect(0, 400, canvas);
  
  //Ears 
  push();
  stroke(149,150,230);
  strokeWeight(7);
  drawEars(145, 60, 180, 145);
  
  //head
  stroke(0);
  strokeWeight(1);
  fill(149,150,230);
  circle(200, 150, 90);
  pop();
  
  
  //drawing eyes
  fill(0);
  drawEyes(220,150,5);
  
  //drawing a mouth
  arc(202,160,40,40, 60, 120,CHORD);
  
  
  //drawing a body 
  push();
  stroke (0);
  fill(243,233,233);
  quad(180, 195, 160, 230, 240, 230, 218, 195);
  rect (160,230,80,170);
  pop();
  
  //drawing the wings 
  //left wing 
  push();
  translate(350,50);
  rotate (130);
  stroke (243,233,233);
  fill(243,233,233);
  rect (257,30,15,140);
  pop();
  
  push();
  stroke (243,233,233);
  fill(243,233,233);
  drawTriangles (20, 105, 178, 245, 26, 45);
  
  
  push();
  rotate(20)
  triangle(70,90,250,200,100,200)
  pop();
  pop();
  
  
   //right wing
  push();
  translate(350,50);
  rotate (130);
  stroke (243,233,233);
  fill(243,233,233);
  rect (257,30,15,140);
  pop();
  
  push();
  stroke (243,233,233);
  fill(243,233,233);
  triangle(200, 305, 378, 125, 326, 355);
  triangle(340, 305, 378, 60, 256, 265);
  triangle(370, 185, 328, 300, 176, 285);
  triangle(290, 355, 308, 240, 206, 305);
  triangle(270,190,310,200,200,300);
  triangle(290,330,330,290,350,330);
  triangle(200,260,380,290,340,200)
  pop();
  
  //bottom of the body
  push();
  stroke (0);
  fill(128,128,128);
  rect (180,401,40,90);
  fill (206, 16, 238);
  rect(120,480,160,50);
  fill(102,100,100);
  circle(130,543,25);
  circle(270,543,25);
  pop();
}

function drawEars (posX,posX1,posY,posY2) {
  line(posX,posX1,posY,posY2);
  line(posX,posX1,posY-50,posY2-60);
  line(posX+130, posX1, posY+15, posY2+30);
  line(posX+130, posX1,posY+110, posY2-60);
}

function drawEyes (eye1,eye2,rad) {
  circle(eye1,eye2,rad);
  circle(eye1-35, eye2, rad);
}

function drawTriangles (p1,p2,p3,p4,p6,p7) {
  triangle (p1,p2,p3,p4,p6,p7);
  triangle (p1+20,p2,p3,p4-5,p6+30,p7+20);
  triangle(p1*5,p2+10,p3+30,p4+35,p6+50,p7+240);
  triangle(p1*6,p2+250,p3+110,p4-5,p6+70,p7+160);
}
