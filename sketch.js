// 128/4 = 32 
// 196/4 = 49 

let spriteSheet;
let walkLeftSprites = [];
let walkRightSprites = [];
let walkUpSprites = [];
let walkDownSprites = [];


let inputActive = false;

let kitchenScene;
let menuScene;
let boardScene;
let tomatoeScene;
let saladScene;
let ovenScene;
let coffeeScene;
let myCharacter;

let currentScene;

// kitchen variables
let photoStove;
let photoTable;

// menu variables
let menuImg;
let rectSizes = [30,20,15,10];
let myArrayHeights = [30,30,30,30];
let Next;

//Board variables 
let photoGarlic, chopedGarlic;
let currentImage;
let photoKnife;
let photoBoard;

//tomatoe variables 
let photoTomatoe, choppedTomatoe;
let currentImage2;
let photoKnife2;
let photoBoard2;

//salad variables
let bowlPhoto;
let saladPhoto;
let slicedTomato;
let choppedGarlic
let dragging = false; 
let rollover = false; 
let x, y, w, h; 
let offsetX, offsetY; 
let spoonPhoto;

//pizza variables
let photoPizza;
let photoPlate;
let pizzaPhoto;

//oven variables
let startTime; 
let objectVisible = false; 

//coffee variabales 
let rectParams = [150, 100, 125, 100];
let coffeePhoto;

//end scene variables
let pizzaKitchen;
let coffeeBrown;
let forkPhoto;
let saladKitchen;

let idx = 0;


function preload() {
 //kitchen photos
  photoStove = loadImage('Stove.jpeg');
  photoTable = loadImage('table.png');
  spriteSheet = loadImage('girl_anim.png');
  
  //menu photo
  menuImg = loadImage('Menu.png');
  Next = loadImage('nextButton.png');
  
  
  //Board photo
  photoGarlic = loadImage('photoGarlic.png');
  chopedGarlic = loadImage('chopedGarlic.png');
  photoKnife = loadImage ('knife.png');
  photoBoard = loadImage('board.png');
  
  //tomatoe photos
  photoTomatoe = loadImage('Tomatoe.png');
  choppedTomatoe = loadImage('ChoppedTomatoe.png');
  photoKnife2 = loadImage ('knife.png');
  photoBoard2 = loadImage('board.png');
  
  //salad photos
  bowlPhoto = loadImage('bowl.png');
  saladPhoto = loadImage('salad.png');
  tomatoSliced = loadImage('slicedtomato.png');
  choppedGarlic = loadImage('choppedGarlic.png');
  spoonPhoto = loadImage('Spoon.png');
  
  //pizza photos
  photoPizza = loadImage('slicePizza.png');
  photoPlate = loadImage('plate.png');
  pizzaPhoto = loadImage('pizzawhole.png');
  
  //coffee photo
  coffeePhoto = loadImage('coffee.png');
  
  //end scene photo
  pizzaKitchen = loadImage('PizzaFinished.png');
  coffeeBrown = loadImage('fullCoffee.png');
  forkPhoto = loadImage ('fork.png');
  saladKitchen = loadImage('bowl.png');
}

function setup() {
  createCanvas(600, 400).parent("sketch-container-0");
  // noSmooth();
  startTime = millis(); 
  console.log("use: key [f] for toggle fullscreen\ncanvas must be activated by mouse click frist");
  
  frameRate(10);
  kitchenScene = new KitchenScene();
  myCharacter = new KitchenCharacter();
  menuScene = new MenuScene();
  boardScene = new BoardScene();
  tomatoeScene = new TomatoeScene();
  saladScene = new SaladScene();
  pizzaScene = new PizzaScene();
  ovenScene = new OvenScene();
  coffeeScene = new CoffeeScene();
  endScene = new EndScene ();
  
 //up
  walkDownSprites.push(
    spriteSheet.get(0, 0, 32, 49)
  );
  walkDownSprites.push(
    spriteSheet.get(32, 0, 32, 49)
  );
  walkDownSprites.push(
    spriteSheet.get(64, 0, 32, 49)
  );
  walkDownSprites.push(
    spriteSheet.get(96, 0, 32, 49)
  );
  
  //right
  walkRightSprites.push(
    spriteSheet.get(0, 98, 32, 49)
  );
  walkRightSprites.push(
    spriteSheet.get(32, 98, 32, 49)
  );
  walkRightSprites.push(
    spriteSheet.get(64, 98, 32, 49)
  );
  walkRightSprites.push(
    spriteSheet.get(96, 98, 32, 49)
  );
  
 //left 
  walkLeftSprites.push(
    spriteSheet.get(0, 49, 32, 49)
  );
  walkLeftSprites.push(
    spriteSheet.get(32, 49, 32, 49)
  );
  walkLeftSprites.push(
    spriteSheet.get(64, 49, 32, 49)
  );
  walkLeftSprites.push(
    spriteSheet.get(96, 49, 32, 49)
  );
  
  //down
  walkUpSprites.push(
    spriteSheet.get(0, 147, 32, 49)
  );
  walkUpSprites.push(
    spriteSheet.get(32, 147, 32, 49)
  );
  walkUpSprites.push(
    spriteSheet.get(64, 147, 32, 49)
  );
  walkUpSprites.push(
    spriteSheet.get(96, 147, 32, 49)
  );
  
  currentScene = kitchenScene;
  currentScene.enterScene();
  
  inputActive = true;
  
  currentImage = photoGarlic; 
  currentImage2 = photoTomatoe;
  
  // Salad Scene. Starting location
  x = 100;
  y = 100;

  // Dimensions
  w = 100;
  h = 100;
  
}

function draw() {
  // calls the update/display logic of the current scene
  currentScene.update();
  currentScene.display();
  
  idx++;
  if (idx >= walkUpSprites.length) {
    idx = 0;
  }
}


function switchScenes(targetScene) {
  currentScene.exitScene();
  currentScene = targetScene;
  currentScene.enterScene();
}

function resetGame() {
  switchScenes(kitchenScene); 
  // reset EVERYTHING
  kitchenScene.hasEnteredScene = false;
  // this.myCharacter.resetPosition(15, 150);
  // kitchenCharacter.hasEnteredScene = false;
  kitchenScene.myCharacter.resetPosition();
  menuScene.hasEnteredScene = false;
  boardScene.hasEnteredScene = false;
  tomatoeScene.hasEnteredScene = false;
  saladScene.hasEnteredScene = false;
  pizzaScene.hasEnteredScene = false;
  ovenScene.hasEnteredScene = false;
  coffeeScene.hasEnteredScene = false;
  endScene.hasEnteredScene = false;
  
}
