var typedKey = 'Stress';
var fontPath;

var spacing = 20;
var spaceWidth = 70; // width of letter ' '
var fontSize = 150;
var lineSpacing = fontSize * 1.2;
var textW = 0;
var letterX = 10 + spacing;
var letterY = lineSpacing;

var stepSize = 2;
var danceFactor = 1;

var font;
var pnts;

var freeze = false;

function setup() {
  createCanvas(600, 600).parent("sketch-container-10");
  noLoop();
  background(179,206,235);

  opentype.load('Momentz.otf', function(err, f) {
    if (err) {
      print(err);
    } else {
      font = f;
      pnts = getPoints(typedKey);
      loop();
    }
  });
}

function draw() {
  if (!font) return;
  noFill();
  push();

  // translation according the actual writing position
  translate(letterX, letterY);

  // distortion on/off
  danceFactor = 1;
  if (mouseIsPressed && mouseButton == LEFT) danceFactor = map(mouseX, 0, width, 0, 3);

  // are there points to draw?
  if (pnts.length > 0) {
    // let the points dance
    for (var i = 0; i < pnts.length; i++) {
      pnts[i].x += random(-stepSize, stepSize) * danceFactor;
      pnts[i].y += random(-stepSize, stepSize) * danceFactor;
    }

    //  ------ lines: connected straight  ------
    strokeWeight(0.1);
    stroke(48, 23, 52); 
    beginShape();
    for (var i = 0; i < pnts.length; i++) {
      vertex(pnts[i].x, pnts[i].y);
      ellipse(pnts[i].x, pnts[i].y, 52, 7);
    }
    vertex(pnts[0].x, pnts[0].y);
    endShape();
  }

  pop();
}

function getPoints() {
  fontPath = font.getPath(typedKey, 0, 90, 140);
  var path = new g.Path(fontPath.commands);
  path = g.resampleByLength(path, 25);
  textW = path.bounds().width;
  // remove all commands without a coordinate
  for (var i = path.commands.length - 1; i >= 0 ; i--) {
    if (path.commands[i].x == undefined) {
      path.commands.splice(i, 2);
    }
  }
  return path.commands;
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
  if (keyCode == ALT) {
    // switch loop on/off
    freeze = !freeze;
    if (freeze) {
      noLoop();
    } else {
      loop();
    }
  }
}

function keyPressed() {
  switch (keyCode) {
  case ENTER:
  case RETURN:
    typedKey = '';
    pnts = getPoints(typedKey);
    letterY += lineSpacing;
    letterX = 50;
    break;
  case BACKSPACE:
  case DELETE:
    
    typedKey = '';
    pnts = getPoints(typedKey);
    letterX = 50;
    letterY = lineSpacing;
    freeze = false;
    loop();
    break;
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    if (keyCode == 32) {
      typedKey = '';
      letterX += textW + spaceWidth;
      pnts = getPoints(typedKey);
    } else {
      typedKey = key;
      letterX += textW + spacing;
      pnts = getPoints(typedKey);
    }
    freeze = false;
    loop();
  }
}
