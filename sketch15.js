let pts;
let caslon;

function preload(){
  caslon = loadFont('Magules.ttf');
}

function setup() {
  createCanvas(600, 600).parent("sketch-container-15");
  
  pts = caslon.textToPoints('LOVE', 70, 30, 200,{
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
  
}

function draw() {
  background(190,30);
  
	translate(20, 140);
  fill(255);
  noStroke();
  for(let i =0; i< pts.length; i++){
   fill(i % 255);
  }
  
  translate(0, 100);
  beginShape(POINTS);
  stroke(0);
  for(let i =0; i< pts.length; i++){
  }
  endShape();
 
	noFill();
  let rotX = sin(frameCount/20) * 15;
  let rotY = cos(frameCount/20) * 15;
  for(let i =0; i< pts.length; i++){      
  }
  
  translate(0, 100);
  for(let i =0; i< pts.length; i++){
   line(pts[i].x, pts[i].y, pts[i].x + random(-15,15), pts[i].y + random(-15,15));
  }
  
}