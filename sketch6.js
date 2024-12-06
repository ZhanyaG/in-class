//how many times I opened my Canvas page in 7 days (Saturday is not included, as I don't usually open it within that day, due to leisure time on weekends)

let photo

let myArrayOfNumbers = [7,13,7,5,15,5,0];
let ellipseSizes = [20, 30,40,50, 55, 60];
let myArrayHeights = [23,30,37,35,25,20];


function setup() {
  createCanvas(600, 600).parent("sketch-container-1");
  // background (152,195,241);
  angleMode(DEGREES);
  noStroke();
  photo = loadImage ('plane.png');
 
  //the code that helps to calculate the number of clouds that should be drawn. As, for example, there are 7 times (myArrayOfNumbers) I opened my Canvas Page on Sunday, but there are only 4 clouds, the code divides 7 to 2, which is 3.5, and then rounds it up to 4, by function ceil. The same for others, 13/2=6.5, and rounds up till 7, etc. 
  for(let i = 0; i < myArrayOfNumbers.length; i++) {
    myArrayOfNumbers[i] = ceil(myArrayOfNumbers[i]/2);
  }
}
   

  function draw() {
    
 background(152,195,241);
    
    
    //red plane, just to interact with the viewer
  push();
  photo.resize(0,50);
  image(photo,mouseX,mouseY); 
  pop();
    
  //This code basically goes in 2 directions: by x and y axis. i indicates x axis, with starting point for drawing the clouds from 75, with spacing of 90. j indicates y position, starting with the bottom of 575, and spacing between each of the clouds by y axis is 60, with the clouds' width of 25, height of 30. 
    
    for (let i = 0; i < myArrayOfNumbers.length; i++) {
      for (let j = 0; j < myArrayOfNumbers[i]; j++) {
        drawClouds(75 + i * 90, 575 - j * 60, 25, 30);
      }
    }
  

//      //setting the function for drawing the clouds, which I wrote by myself, and indicating the calculations for clouds and their identical forms.
function drawClouds(posX,posY,widthE, heightE) {
    
 ellipse(posX, posY, widthE, heightE);
 ellipse(posX+15, posY-10, widthE+5, heightE);
 ellipse (posX+25, posY, widthE+15, heightE);
    
  //text "How many times I opened my Canvas Page?"
  push();
  textSize(20);
  fill(255,0,0);
  textFont('Italic');
  text('How many times I opened my Canvas Page?', 110, 90);
  pop();
  
  // table's frames for column
  push();
  fill(0);
  rect(40, 10, 5, 580,50);
  pop();
  
  //table's frames for rows
  push();
  fill(0);
  translate(600,60);
  rotate(90);
  rect(0, 10, 5, 580,50);
  pop();
  
  //column names by weeks (except Saturday, because I don't work on that day on my homeworks)
  push();
  textSize(17);
  fill(0);
  textFont('Font');
  text('Sun', 75, 50);
  text('Mon', 165, 50);
  text('Tue', 260, 50);  
  text('Wed', 345, 50); 
  text('Thu', 435, 50);
  text('Fri', 535, 50);
 
  //rows for numbers of how many times I opened the page
  text('1', 20, 575); 
  text('3', 20, 520);
  text('5', 20, 460); 
  text('7', 20, 405);
  text('9', 20, 345);
  text('11', 15, 280);
  text('13', 15, 220);
  text('15', 15, 160);
  pop();

}
  }