var textTyped = 'Anxiety';

var font;


function setup() {
  createCanvas(600,600);
  noLoop();

  opentype.load('Travellia.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  push();
  if(mouseX<=150)
  {
    background(26, 99, 189);
    console.log('blue color')
    let fc =  frameCount;
      console.log(fc);
  }
  else if (mouseX>150 && mouseX<=250)
  {
    background(189, 39, 28);
    console.log('red color')
  }
  else if (mouseX>250 && mouseX<=370)
  {
    background(154, 25, 194);
    console.log('purple color')
  }
   else if (mouseX>400)
  {
    background(0,128,0);
    console.log('green color')
  }
  pop();
  
  push();
  stroke(255);
  fill(26, 99, 189);
  rect(150, 560, 10, 50);
  pop();
  
  push();
  stroke(255);
  fill(189, 39, 28);
  rect(250, 560, 10, 50);
  pop();
  
  push();
  stroke(255);
  fill(154, 25, 194);
  rect(370, 560, 10, 50);
  pop();
  
  push();
  stroke(255);
  fill(0,128,0);
  rect(470, 560, 10, 50);
  pop();
  
  if (!font) return;

  // margin border
  translate(120, 240);

  if (textTyped.length > 0) {
    // get a path from OpenType.js
    var fontPath = font.getPath(textTyped, 10, 100, 150);
    
    var path = new g.Path(fontPath.commands);
    
    path = g.resampleByLength(path, 4);
    

    // lines
    stroke(0);
    strokeWeight(1.0);
    var l = 5;
    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];
      line(pnt.x - l, pnt.y - l, pnt.x + l, pnt.y + l);
    }

    // dots
    fill(245, 226, 24);
    noStroke();
    var diameter = 7;
    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];
      // on every 2nd point
      if (i % 2 == 0) {
        ellipse(pnt.x, pnt.y, diameter, diameter);
      }
    }
   
  }

  noLoop();
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, textTyped.length - 1);
      loop();
    }
  }
}

function keyTyped() {
  if (keyCode >= 12) {
    textTyped += key;
    loop();
  }
}