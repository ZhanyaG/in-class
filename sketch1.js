let ellipseText = "ash nazg thrakatulûk agh burzum-ishi krimpatul";
let radiusX = 320 / 2;  // Horizontal radius (half the width of the ellipse)
let radiusY = 220 / 2;  // Vertical radius (half the height of the ellipse)
let centerX, centerY;

function setup() {
  createCanvas(400, 400).parent("sketch-container-6");
  angleMode(DEGREES); 
  noStroke();
  blendMode(BLEND)
  centerX = width / 2;
  centerY = height / 2;
  textAlign(CENTER, CENTER);
  textSize(20); // Adjust text size to suit the design
}

function draw() {
  background("black");

  // Rotate the entire ring by 120 degrees and draw the ring with gradient
  push();
  translate(centerX, centerY);
  rotate(100);  // Rotate the entire ring
  
  // Gradient from yellow-gold to inner gold to shadow
  drawGradientEllipse(0, 0, 360, 240, color(241, 207, 11), color("rgb(158,138,29)"), color("#5C3D32"));



  // Inner darker part
  fill("rgb(134,129,112)"); // Inner gold
  ellipse(0, 0, 220, 140); // Inner ellipse to give background
  pop();

  // Draw the text along the ellipse
  fill("#FCF6BF)"); // Glowing text color

  // Character in the string
  for (let i = 0; i < ellipseText.length; i++) {
    let angle = map(i, 0, ellipseText.length, -90, 270); // Map the angle around the ellipse

    // Calculate x and y positions on the ellipse using cos and sin
    let x = centerX + radiusX * cos(angle);
    let y = centerY + radiusY * sin(angle);

   
// Calculate the rotation to make each character follow the ellipse's tangent
    let tangentAngle = atan2(radiusY * cos(angle), radiusX * sin(angle));

    // Place and rotate each character
    push();
    translate(x, y); // Move to the character's position
    rotate(tangentAngle); // Align the character with the ellipse's curve
    text(ellipseText[i], 0, 0); // Draw the current character
    pop();
    }
}
  // Function to draw an ellipse with a gradient effect from the outermost to the third ellipse
function drawGradientEllipse(x, y, w, h, colorStart, colorMiddle, colorEnd) {
  let steps = 100; // Number of steps for the gradient
  for (let i = 0; i <= steps; i++) {
    let inter = map(i, 0, steps, 0, 1); // Interpolation factor
    let midInter = map(i, 0, steps / 2, 0, 1);
    let c;
    if (i <= steps / 2) {
      c = lerpColor(colorStart, colorMiddle, midInter); // First gradient from colorStart to colorMiddle
    } else {
      c = lerpColor(colorMiddle, colorEnd, inter); // Second gradient from colorMiddle to colorEnd
    }
    fill(c);
    ellipse(x, y, w * (1 - i / steps), h * (1 - i / steps)); // Draw ellipses decreasing in size

  }
}