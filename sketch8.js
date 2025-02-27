let pts;
let caslon;

function preload(){
  caslon = loadFont('Magules.ttf');
}

function setup() {
  createCanvas(600, 600);
  
  pts = caslon.textToPoints('Love', 130, 230, 220,{
    sampleFactor: 0.45,
    simplifyThreshold: 0
  });
  
}

function draw() {
  background(247,155,155);
  
  
  translate(0,100);
	noFill();
  let rotX = sin(frameCount/25) * 15;
  let rotY = cos(frameCount/20) * 15;
  for(let i =0; i< pts.length; i++){      
    line(pts[i].x, pts[i].y, pts[i].x - rotX, pts[i].y - rotY);
  }
  
  textFont(caslon);
  textSize(190);
  text('Love', 0,0);
  fill(255,0,0,30);
  text('Love', -rotX, -rotY);
  
  textFont(caslon);
  textSize(190);
  text('Love', 0,0);
  fill(255,0,0,30);
  text('Love', -rotX, -rotY);
  
  textFont(caslon);
  textSize(210);
  text('Love', 200, 450);
  fill(255,0,0,30);
  text('Love', -rotX, -rotY);
}