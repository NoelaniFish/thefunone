// Scene variables
let currentScene = 'mainscreen';

// Mainscreen variables
let imgm;

// idle scene variables
let imge;
let line1 = ["*continually press space bar to interact*", "Oh, didn't see you! Finally, you're born!", "Looks like you got a lot of growing to grow and life to live. C'mon!", "Back to it..."];
let currentTextIndex = 0;
let currentDemoIndex = 0;
let demoImages = [];
let speaking = true;

// scenef or tennessee variables
let shapes = [];
let circleBox, squareBox;
let gameWon = false;
let imgf;
let chickens = [];
let goats = [];
let goatImgs= [];
let chickenImgs =[];
let chickenpen;
let goatpen;
let timeLeft; 
let timerInterval
let n;

// indoctrination or scenei variables
let babynani;
let priests = [];
let gameOver = false;
let priestSpeed;
let s;
let babynaniSpeed = 4;
let score = 0;
let imgi;
let babynaniImg;
let priestImgs = [];
let priestSpawnRate = 30;
let t;
let r;

// scenep variables
let successMsgShown = false;
let imgp;

//final scene
let imgd;
// Music assets
let idlemusic, scenefmusic, sceneimusic, scenepmusic;

function preload() {
  // Load images for various scenes
  //mainscreen assets
  imgm = loadImage('mainscreen/mainscreen.gif');
  
  //idle or demo assets
  imge = loadImage('idle/idle.png');
  demoImages[0] = loadImage('idle/demo1.gif');
  demoImages[1] = loadImage('idle/demo2.png');
  demoImages[2] = loadImage('idle/demo3.png');
  demoImages[3] = loadImage('idle/demo4.gif');

  //load farm assets
  imgf = loadImage ('scenef/scenefarm.png');
  goatImgs[0]= loadImage('scenef/goat1.gif');
  goatImgs[1]=loadImage('scenef/goat2.gif');
  goatImgs[2]= loadImage ('scenef/goat3.gif');
  goatImgs[3]= loadImage('scenef/goat4.gif');
  goatImgs[4]=loadImage('scenef/goat5.gif');
  chickenImgs[0]= loadImage('scenef/chicken1.gif');
  chickenImgs[1]= loadImage('scenef/chicken2.gif');
  chickenImgs[2]= loadImage('scenef/chicken3.gif');
  chickenImgs[3]= loadImage ('scenef/chicken4.gif');
  chickenImgs[4]= loadImage('scenef/chicken5.gif')
  chickenpen = loadImage ('scenef/chickenpen.png');
  goatpen = loadImage ('scenef/goatpen.png');
  
  //indoctrination assets
  babynaniImg = loadImage('scenei/babynani.png');
  priestImgs[0] = loadImage('scenei/priest1.gif');
  priestImgs[1] = loadImage('scenei/priest2.gif');
  priestImgs[2] = loadImage('scenei/priest3.gif');
  imgi = loadImage('scenei/bgimg.png');

  //album art assets
  imgp =loadImage('scenep/imgp.png')
  
  //finale
  imgd = loadImage('idle/imgd.gif')
  //music assets
  sceneimusic = loadSound('music/sceneimusic.mp3');
  idlemusic = loadSound('music/idlemusic.mp3');
  scenefmusic = loadSound('music/scenefmusic.mp3');
  scenepmusic = loadSound('music/scenepmusic.mp3');
}

function setup() {
  createCanvas(600, 600);
 
  
  // indoctrination setup
  babynani = new Babynani();
  //if you fail the game options
  t = { x: width / 2 - 50, y: 345, w: 100, h: 20 }; // "try again"
 // r = { x: width / 2 - 100, y: 385, w: 200, h: 20 }; // "return to mainscreen"
  //priest speed variable
  s= random (2, 6);
  
  // Initialize shapes for scenef
  //pens for sorting
   circleBox = new Box(50, 50, 150, 150, 'red', chickenpen);
  squareBox = new Box(400, 50, 150, 150, 'blue', goatpen);
  //randomized timer variable animals escape in this amount of time
  n= random(5, 30);
  // logistics of scenef
  if (currentScene === 'scenef') {
    shapes = [];
    //for loop for making goats and chickens
    for (let i = 0; i < 10; i++) {
      let type = random(['circle', 'square']);
      let color = (type === 'circle') ? 'red' : 'blue';
      let direction = random(['horizontal', 'vertical']);
      //makes shapes scroll and create randomized color or class of animal
      shapes.push(new ScrollingShape(random(width), random(height), type, color, direction));
    }
  }
  //painting album scenep setup
  drawingBuffer = createGraphics(drawArea.w, drawArea.h);
  drawingBuffer.background(235); 
}

// scene layouts
function draw() {
  switch (currentScene) {
    case 'mainscreen':
      mainscreen();
      break;
    case 'idle':
      idle();
      break;
    case 'scenef':
      scenef();
      break;
    case 'scenei':
      scenei();
      break;
    case 'scenep':
      scenep();
      break;
    case 'scened':
      scened();
      break;
  }
}
// when scene changes music starts and stops
function changeScene(newScene) {
  if (idlemusic && idlemusic.isPlaying()) idlemusic.stop();
  if (sceneimusic && sceneimusic.isPlaying()) sceneimusic.stop();
  if (scenefmusic && scenefmusic.isPlaying()) scenefmusic.stop();
  if (scenepmusic && scenepmusic.isPlaying()) scenepmusic.stop();

  if (newScene === 'scenef') {
    gameWon = false;
    initializeShapes();
    //reset the timer if you didnt succeed in sorting
    resetTimer(); 
  }
  currentScene = newScene;

   // Play music for the new scene
  switch (newScene) {
    case 'idle':
    case 'scened':
      idlemusic.loop();
      break;
    case 'scenef':
      scenefmusic.loop();
      break;
    case 'scenei':
      sceneimusic.loop();
      break;
    case 'scenep':
      scenepmusic.loop();
      break;
  }
}

// Scene functions

//mainscreen showing title
function mainscreen() {
  background(imgm);
  textStyle(NORMAL)
  textFont('Courier');
  textSize(14);
  fill(215);
  text('Press the space bar to enter', 40, 570);
  textStyle(BOLDITALIC)
text ('by Noelani Fishman', 410, 500)}

//scene idle or transition explained
//have person talking with speech bubble like webkinz
function idle() {
  background(imge);
  noStroke();
  fill(247,234, 232, 230);
  rect (10, 10,580, 90, 40);
  textFont ('Courier')
  textStyle(ITALIC)
  fill(0)
  textAlign(CENTER, TOP);
  textSize(14);
  text(line1[currentTextIndex], width / 2, 40);
let currentDemoImage = demoImages[currentDemoIndex];
  if (currentDemoImage) {
    image(currentDemoImage, 0, 120, currentDemoImage.width / 4, currentDemoImage.height / 4);
  }}

//the pens are the box or the classification
class Box {
  constructor(x, y, w, h, color, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.img = img;
  }

  // Method to show the box on the canvas
  // Display the shape with its corresponding image
// Display the shape with its corresponding image
show() {
  if (this.img) {
    let scaleFactor = 2.5;
    let aspectRatio = this.img.width / this.img.height;
    let displayHeight = this.size * scaleFactor;
    let displayWidth = displayHeight * aspectRatio;
    image(this.img, this.x - displayWidth / 2, this.y - displayHeight / 2, displayWidth, displayHeight);
  }
   }
     
  }
// Shape class for chickens and goats
//color is sorting mechanism
class ScrollingShape {
  constructor(x, y, type, color, direction) {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.type = type;
    this.color = color;
    this.direction = direction;
    this.inCorrectBox = false;
    this.speed = random(1, 3);
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;

    // Assign a random image based on type (goats or chickens)
    if (this.type === 'goats') {
      this.img = random(goatImgs);
    } else if (this.type === 'chickens') {
      this.img = random(chickenImgs);
    }
  }


  // Method to check if the shape is clicked
  clicked(mx, my) {
    return (
      mx > this.x - this.size / 2 &&
      mx < this.x + this.size / 2 &&
      my > this.y - this.size / 2 &&
      my < this.y + this.size / 2
    );
  }

  // Start dragging the shape
  startDrag(mx, my) {
    if (this.clicked(mx, my)) {
      this.dragging = true;
      this.offsetX = this.x - mx;
      this.offsetY = this.y - my;
    }
  }

  // Drag the shape with the mouse
  drag(mx, my) {
    if (this.dragging) {
      this.x = mx + this.offsetX;
      this.y = my + this.offsetY;
    }
  }

  // Stop dragging and check if placed in the correct box
 stopDrag() {
  if (this.dragging) {
    this.dragging = false;

    // Check if the shape is in the correct box based on its type
    if (this.type === 'chickens') {
      this.checkInBox(circleBox);
    } else if (this.type === 'goats') {
      this.checkInBox(squareBox);
    }
  }
}

  // Method to check if the shape is placed in the correct box
  checkInBox(box) {
    if (
    this.x - this.size / 2 > box.x &&              
    this.x + this.size / 2 < box.x + box.w &&      
    this.y - this.size / 2 > box.y &&              
    this.y + this.size / 2 < box.y + box.h         
  ) {
    
    this.inCorrectBox = true;
    
    
    // Lock the shape in place
    this.dragging = false;
  } else {
    // If not in the correct box, the shape can still be dragged
    this.inCorrectBox = false;
  }
}
  // Method to move the shape based on its direction
  move() {
    if (!this.dragging) {
      if (this.direction === 'horizontal') {
        this.x += this.speed;
        if (this.x > width || this.x < 0) {
          this.speed *= -1;
        }
      } else if (this.direction === 'vertical') {
        this.y += this.speed;
        if (this.y > height || this.y < 0) {
          this.speed *= -1;
        }
      }
        }
  }

  // Method to display the shape with its corresponding image
  show() {
    if (this.img) {
      let scaleFactor = 1.5;
      let aspectRatio = this.img.width / this.img.height;
      let displayHeight = this.size * scaleFactor;
      let displayWidth = displayHeight * aspectRatio;
      image(this.img, this.x - displayWidth / 2, this.y - displayHeight / 2, displayWidth, displayHeight);
    }
        }
}

//drawn out farm scene
function scenef() {
  background(imgf);
  textFont('HELVETICA');
  fill(215);
  textSize(48);
  textStyle(BOLDITALIC);
  text("HOWDY! :)", 165, 470);
  textSize(19);
  textStyle(BOLD);
  text("Born and raised, you're a Knoxville, Tennessee native.", 290, 520);
  textSize(14);
  textStyle(NORMAL);
  text("Come herd your goats and chickens into the correct pens before they escape!", 290, 540);
  text("...if you can", 100, 560);

  // Show the boxes or pens- covered by images of pens
  circleBox.show();
  squareBox.show();

  // Draw pens
  image(chickenpen, 50, 50, 180, 180);
  image(goatpen, 400, 50, 180, 180);

  // Move and show shapes
   for (let shape of shapes) {
    if (!shape.inCorrectBox) {
      shape.move(); 
    }
     //function to sort shapes and give autonomy
    shape.show();
  }

  // Check if all shapes or animals are sorted correctly
  if (shapes.every(shape => shape.inCorrectBox)) {
    gameWon = true;
    stopTimer();
    setTimeout(() => changeScene('scenei'), 1000);
  }
}


// Function to initialize shapes (chickens and goats)
//make them scroll back and forth and randomize based on color/ category they are
function initializeShapes() {
  shapes = [];
  for (let i = 0; i < 10; i++) {
    let type = random(['chickens', 'goats']);
    let color = (type === 'chickens') ? 'red' : 'blue';
    let direction = random(['horizontal', 'vertical']);
    shapes.push(new ScrollingShape(random(width), random(height), type, color, direction));
  }
}

//indoctrination or catholic scene
//shows priests incoming and rate of incoming
function scenei() {
  background(imgi);
priestSpeed =s
  //explanation for people to play
 
  
  fill(229, 222, 221, 140);
  textSize(8); 
  textFont ('Courier');
  text("holy mary...", 65, 520);
    fill(200);
  textSize(14); 
  textStyle(ITALIC);
  text( "You're in Catholic School, and you DEFINITELY don't belong.", 280, 540)
  text("Use the arrow keys to escape to the end of the hallway.", 260, 560)
  
  // Show and move Babynani
  babynani.show();
  babynani.move();

  // Spawn priests at a set rate
  if (frameCount % priestSpawnRate === 0) {
    priests.push(new Priests());
  }

  // Show and move priests
  for (let i = priests.length - 1; i >= 0; i--) {
    priests[i].show();
    priests[i].fall();

    // Check for collision with Babynani
    if (priests[i].hits(babynani)) {
      gameOver = true;
      displayIndoctrinatedMessage();
      return;
    }

    // Remove priests that are off-screen
    if (priests[i].offscreen()) {
      priests.splice(i, 1);
      score++;
    }
  }

  // If Babynani reaches the top, move to the next scene so y must be 0
  if (babynani.y <= 0) {
    changeScene('scenep');
  }
}

//define draw area for album for scenep

let drawArea = {
  x: -75,     // x-position of the drawing area
  y: 15,     // y-position of the drawing area
  w: 430,     // width of the drawing area
  h: 430      // height of the drawing area
};

//painting scene, fill in the album to complete the work not triggered by that but space bar instead
function scenep() {
  background(imgp);
  noStroke();
  textFont('Helvetica')
   fill(255);
   textStyle(ITALIC);
  textSize(24)
  text("you're a freelancer...", 200, 520);
  textStyle(NORMAL)
  textSize(24);
  text("complete a drawing based on the song playing", 330, 540);
  textStyle(ITALIC);
  textSize(14)
  text("press space when you think the client will be happy!", 285, 560);
  //canvas NOT drawing area
  fill(215)
  rect (-75,15, 430, 430)
  //stated function of drawing area
drawInArea(); 
  // Draw the outline of the drawing area
 stroke(255);
  strokeWeight(0.2);
  noFill();
  //defined drawing area
  rect(drawArea.x, drawArea.y, drawArea.w, drawArea.h);
 //to keep drawing there
  image(drawingBuffer, drawArea.x, drawArea.y);
}


// scene finale!
function scened() {
  background(imgd);
 
}
function drawInArea() {
  // Save the current state
  push();

  // Translate the canvas to the drawing area's top-left corner
  translate(drawingArea.x, drawingArea.y);

  // Draw the boundary of the drawing area for reference
  noFill();
  stroke(0);
  rect(0, 0, drawingArea.w, drawingArea.h);

  // Constrain drawing to within the area using clipping
  clip(0, 0, drawingArea.w, drawingArea.h);

  if (mouseIsPressed && currentScene === 'scenep') {
    if (
      mouseX > drawArea.x && mouseX < drawArea.x + drawArea.w &&
      mouseY > drawArea.y && mouseY < drawArea.y + drawArea.h
    ) {
      // Draw within the clipping area
      stroke(0);
      strokeWeight(3);
      line(pmouseX - drawArea.x, pmouseY - drawArea.y, mouseX - drawArea.x, mouseY - drawArea.y);
    }
  }
  // Restore the previous state
  pop();
}

//if fail at game you go back to original screen this is the failure message- supposed to be with choices, but alas
function displayIndoctrinatedMessage() {
  background(0);
  textAlign(CENTER, CENTER);
  textFont ('Helvetica')
  textStyle(BOLD)
  fill(175, 29, 7);
  textSize(34)
  text("YOU HAVE BEEN INDOCTRINATED!", width/2, 260);
  fill (215)
  textSize(14)
  textStyle(ITALIC)
  
 // Draw "try again" and "return to mainscreen" options
 text("try again", t.x + t.w / 2, t.y + t.h / 2);
  //text("return to mainscreen", r.x + r.w / 2, r.y + r.h / 2);
  
  //invisible rectangle for detecting clicks
  //instead im doing variables
  //noFill();
 // stroke(0);
 // strokeWeight(2);
 // rect(width / 2 - 60, 355, 120, 25);
  //rect(width / 2 - 110, 395, 200, 25);
  // if time is out return
 // setTimeout(() => changeScene('mainscreen'), 2000);
}

// Babynani class defining and making a mini me
class Babynani {
  constructor() {
    this.width = 60;
    this.height = 60;
    this.x = width / 2;
    this.y = height - this.height;
  }
// ingredients for baby nani
  show() {
    if (babynaniImg) {
      // Calculate the aspect ratio
      let aspectRatio = babynaniImg.width / babynaniImg.height;
      let displayHeight = this.height;
      let displayWidth = displayHeight * aspectRatio;
      
      image(babynaniImg, this.x, this.y, displayWidth, displayHeight);
    }
  }
//baby nani on the move commands, much like frogger
  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= babynaniSpeed;
    if (keyIsDown(RIGHT_ARROW)) this.x += babynaniSpeed;
    if (keyIsDown(UP_ARROW)) this.y -= babynaniSpeed;
    this.x = constrain(this.x, 0, width - this.width);
    this.y = constrain(this.y, 0, height - this.height);
  }
}
priestSpeed = s

// class of priests
class Priests {
  constructor() {
    this.size = random(40, 70);
    this.x = random(width);
    this.y = -this.size;
    this.speed = priestSpeed;// between 2 and 6
    this.img = random(priestImgs);
  }

  show() {
    if (this.img) {
      // Calculate aspect ratio and stick with it
      let aspectRatio = this.img.width / this.img.height;
      let displayHeight = this.size;
      let displayWidth = displayHeight * aspectRatio;
      
      image(this.img, this.x, this.y, displayWidth, displayHeight);
    }
  }

 fall() {
   this.y += this.speed;
  }
//collision mechanism for baby nani to get indoctrinated
  hits(babynani) {
    return (
      //collision mechanism
      babynani.x < this.x + this.size &&
      babynani.x + babynani.width > this.x &&
      babynani.y < this.y + this.size &&
      babynani.y + babynani.height > this.y
    );
  }
//controls babynani rotating around like treadmill
 offscreen() {
  return this.y > height;
  }
}
function drawInArea(x, y, w, h) {
  // Save the current state
  push();
  // Translate the origin to (x, y)
  translate(x, y);
  // Draw within this translated area
  fill(0, 255, 0);
  rect(0, 0, w, h); // This rectangle starts at the new origin
  fill(255, 0, 0);
  ellipse(w / 2, h / 2, 50); // Draw an ellipse in the middle of the area
  // Restore the previous state
  pop();
}
// make the space essentially function as a transistion between most scenes like mainscreen to idle, idle to scenef, scene p to scened
//otherwise pass through game, go to y coordinate 0 for babynani(end of hallway) or sort shapes in correct color (pens and animal group)
function keyPressed() {
  if (key === ' ') { // Space bar pressed
    switch (currentScene) {
      case 'mainscreen':
        changeScene('idle');
        break;
      case 'idle':
        advanceDialogue();
        break;
      case 'scenef':
        if (gameWon) changeScene('scenei');
        break;
      case 'scenei':
        if (gameOver) {
          displayIndoctrinatedMessage();
        } else if (babynani.y <= 0) {
          changeScene('scenep');
        }
        break;
      case 'scenep':
        changeScene('scened');
        break;
      case 'scened':
        changeScene('mainscreen');
        break;
    }
  }
}

// for dragging chickens (circles) and goats (squares)
function mousePressed() {
  for (let shape of shapes) {
    // Check if the mouse is clicked on a shape
    if (shape.clicked(mouseX, mouseY)) {
      shape.startDrag(mouseX, mouseY); // Start dragging
    }
  }
}
{ if (currentScene === 'scenef') {
    for (let shape of shapes) {
      shape.startDrag(mouseX, mouseY);
    }
  }
}

  //if the current scene is catholic school and game over you can restart over  and change scene is stuck on scenei
    function mouseClicked() {
  // Only respond to clicks if gameOver is true in scenei
  if (currentScene === 'scenei' && gameOver) {
    // Check if "try again" is clicked
    if (mouseX > t.x && mouseX < t.x + t.w && mouseY > t.y && mouseY < t.y + t.h) {
      resetScenei(); // Restart scenei
      return;
    }

    // Check if "return to mainscreen" is clicked
    if (mouseX > r.x && mouseX < r.x + r.w && mouseY > r.y && mouseY < r.y + r.h) {
      changeScene('mainscreen'); // Return to mainscreen
      return;
    }
  }
}

// for dragging chickens (circles) and goats (squares)
function mouseReleased() {
  for (let shape of shapes) {
    shape.stopDrag(circleBox);
    shape.stopDrag(squareBox);
  }
}
{
  if (currentScene === 'scenef') {
    for (let shape of shapes) {
      shape.stopDrag();
    }
  }
}
// for dragging chickens (circles) and goats (squares)
function mouseDragged() {
  for (let shape of shapes) {
    // Only drag the shape if it's being actively dragged
    if (shape.dragging) {
      shape.drag(mouseX, mouseY); // Update shape position
    }
  }
 
 {
  // Ensure we're in the correct scene for drawing
  if (currentScene === 'scenep') {
    // Check if the mouse is within the updated drawing area
    if (mouseX > drawArea.x && mouseX < drawArea.x + drawArea.w &&
        mouseY > drawArea.y && mouseY < drawArea.y + drawArea.h) {
      
      // Draw a line within the defined drawing area
      stroke(0);           // Set the drawing color to black
      strokeWeight(3);     // Set the thickness of the line
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
   //mouse dragged so that one can drag shapes
   { if (currentScene === 'scenef') {
    for (let shape of shapes) {
      shape.drag(mouseX, mouseY);
    }
  }
    //mouse dragged function for scenep that allows drawing
    {
  if (currentScene === 'scenep') {
    drawInArea();
  }
}
}
}
}

function startTimer() {
  // Start the countdown interval
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Release chickens and goats
      releaseAnimals(); 
      //reset timer as well...
      resetTimer(); 
    }
  }, 1000);
}
//timer for maliciousness to make game more interesting
function resetTimer() {
   n= random(5, 45);
  timeLeft = n;
  clearInterval(timerInterval);
  startTimer();
}

function stopTimer() {
  clearInterval(timerInterval);
}

function releaseAnimals() {
  // Release all shapes (reset their positions)
  for (let shape of shapes) {
    shape.inCorrectBox = false;
    shape.x = random(width);
    shape.y = random(height);
  }
}
function drawInArea() {
  // Check if the mouse is pressed and within the drawing area
  if (mouseIsPressed && currentScene === 'scenep') {
    if (
      mouseX > drawArea.x && mouseX < drawArea.x + drawArea.w &&
      mouseY > drawArea.y && mouseY < drawArea.y + drawArea.h
    ) {
      // Draw within the buffer
      drawingBuffer.stroke(0); // Set line color to black
      drawingBuffer.strokeWeight(3); // Set line thickness
      drawingBuffer.line(
        pmouseX - drawArea.x, pmouseY - drawArea.y,
        mouseX - drawArea.x, mouseY - drawArea.y
      );
    }
  }
}

// this makes it so it triggers to the next line of dialogue if it goes back to 0 line of dialogue then next scene aka scene f
function advanceDialogue() {
  // Advance to the next line of text in the idle scene
  currentTextIndex++;

  // Check if we've reached the end of the `dialogue` or line1 array
  if (currentTextIndex >= line1.length) {
    currentTextIndex = 0; 
    changeScene('scenef'); // Transition to 'scenef' after the last line
    return;
  }

  // Advance to the next demo image
  currentDemoIndex = (currentDemoIndex + 1) % demoImages.length;
}


