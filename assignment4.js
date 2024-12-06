let x = 200;
let y = 280;
let vestOff = false;
let myFont;


function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent ("sketch-container");
  angleMode(DEGREES);
}

function draw() {
  background(255);
  goatFace();
  babyBody();

  // Show vest if not ripped off
  if (!vestOff) {
    littleVest(x, y);
  }

  lilTail();

  // Display the appropriate message
  noStroke();
  fill(0);
  textSize(14);
  textFont('Avenir', 14);

  if (!vestOff) {
    // Show default instruction text when the vest is still on
    text('click to remove my lil vest', 97, 575);
  } else {
    // Show "oh no!" when the vest is ripped off
    textSize(60);
    text('oh no!', 120, 314);
     textSize(40);
    text('my lil body', 100, 430);
  }

  // Log mouse coordinates (for debugging)
  console.log(mouseX, mouseY);
}

function mousePressed() {
  vestOff = true;  // Trigger vest to "rip off"
}

function mouseReleased() {
  vestOff = false;  // Reset after releasing the mouse
}

function littleVest(x, y) {
  // Move the vest upwards when pressed (ripping off)
  if (vestOff) {
    y -= 40;  // Speed of "ripping" effect
    if (y < -200) {
      vestOff = false;  // Stop moving when vest is off screen
    }
  }

  // Drawing the vest and arms
  noStroke();
  fill(191, 177, 136);
  ellipse(x, y, 200, 170);
  ellipse(x + 40, y, 200, 170);

  // Vest drawing
  push();
  noStroke();
  fill(171, 108, 66);
  rect(x - 70, y - 88, 95, 180, 20);
  rect(x + 43, y - 105, 55, 195, 20);
  translate(196, 40);
  rotate(40);
  rect(x - 70, y - 220, 35, 120, 20);
  translate(29, 169);
  rotate(-80);
  rect(x - 195, y - 220, 75, 120, 20);
  pop();

  push();
  noStroke();
  fill(171, 108, 66);
  rect(x - 43, y + 20, 139, 70, 20);
  pop();
}

function goatFace() {
 
}

function babyBody() {
  
}

function lilTail() {
 
}

function goatFace(){
  w= mouseX/20
//GOAT FACE
 stroke(3)
strokeWeight (3);
noFill(0);
beginShape();
bezier (280, 187, 251, 72, 232, 73, 214, 62);
bezier (214, 62, 287,57, 274, 63, 261, 31);
bezier (261, 31, 235, 24, 185, 47, 171, 60);
bezier (171, 60, 161, 73, 137, 97, 148, 102);
bezier (148, 102,103, 120, 111, 150, 118, 152);
line (118, 152, 182, 132); 
line (182, 132, 122, 161);
bezier (122, 161, 170, 126, 173, 172, 140);
bezier (122, 161, 129, 175, 140, 177, 147, 177);
line (147, 177, 159, 195);
line (159, 195, 156, 173);
line (156, 173, 165, 189);
line (165, 189, 165, 168);
line (165, 168, 172, 185);
line (172, 185, 172, 163);
line (172, 163, 176, 180);
line (176, 180, 177, 163);
line (177, 163, 208, 150);
line (208, 150, 217, 120);
line (198, 154, 200, 170);
line (200, 170, 188, 197);
endShape();
  
// horn 
bezier(157,  74, 150, 43, 129, 36, 123, 59);
bezier (123, 59, 124, 17, 159, 29, 173, 57);

//nostril 
fill (0);
bezier (142, 121, 122, 136, 136, 127, 132, 139);
  
// exclamations
line (80, 130, 49,  141);
line (82, 108, 42, 104);
line (90, 84, 43, 71);
line (276, 120, 311, 136);
line (272, 100, 309, 98);
line (264, 76, 296, 68);

// curves around eyes
noFill()
strokeWeight(2)
bezier (171, 101, 196, 101, 200, 78, 196, 73);
bezier (172, 108, 185, 109, 204, 107, 207, 78);
bezier (164, 93, 164, 83, 174, 74, 188, 69);
bezier(158, 93, 164, 70, 174, 68, 185, 63)
  
// eye
push();
fill (0)
translate (70, 30)
rotate(-40)
ellipse (50, 115, 25, w)
pop();  
 
// ear 
bezier (156, 78, 113, 82, 72, 120, 142, 105)
fill (0)
strokeWeight (3)
bezier (153, 83, 110, 88, 101, 121,  145, 92)
bezier (204, 51, 292, 36, 241, 52, 216, 53)

// horn
strokeWeight(8);

  line(156, 69, 169, 58);
  line (150, 51, 157, 42);
  line (139, 43, 137, 36)
}
function littleVest(x,y) { // 200,280
 // arm
  noStroke()
  fill ( 191, 177, 136);
ellipse (x, y, 200,170);
ellipse (x+ 40, y, 200,170);
   //vest
  
  push()
  noStroke()
fill(171, 108, 66)
rect (x-70, y-88, 95, 180, 20)
rect (x+43, y-105, 55, 195, 20)
 translate(196, 40) 
  rotate(40)
rect (x-70, y-220, 35, 120, 20)
  translate(29, 169) 
  rotate(-80)
rect (x-195, y-220, 75, 120, 20)
  pop();
  
push(); 
  noStroke ();
  fill (171, 108, 66)
  rect (x-43, y+20, 139, 70, 20)
pop(); 

}


function babyBody () {
  
  //baby arms 
noStroke();
fill(229, 183, 160);
rect(130, 200, 170, 165, 20);
fill (202,103,78)
rect (208, 320, 15, 8, 20);
fill(224, 143, 120);
rect (157, 233, 15, 15, 20);
rect (260, 233, 15, 15, 20);
fill(229, 183, 160);
rect (280, 200, 50, 50, 20);
rect (95, 200, 50, 50, 20) ;
rect (59, 200, 46, 46, 20) ; 
rect (320, 200, 46, 46, 20) ; 
rect (60, 199, 15, 15, 20);
rect (52, 215, 15, 15, 20);
rect (58, 236, 15, 15, 20);
rect (79, 240, 15, 15, 20);
rect (70, 198, 15, 15, 20);
rect (342, 196, 15, 15, 20);
rect (360, 205, 15, 15, 20);
rect (358, 228, 15, 15, 20);
rect (353, 240, 15, 15, 20);
rect (358, 219, 15, 15, 20);

// ribbons 
stroke (184, 58, 47);
strokeWeight (4)
noFill();
bezier(189, 194, 232, 215, 258, 203, 279, 190)
bezier (229, 206, 207, 242, 272, 234, 220, 206)
bezier (229, 209, 192, 256, 204, 197, 224, 207)
bezier (231, 210, 239, 237, 227, 257, 220, 264)
bezier (220, 264, 208, 287, 222, 297, 230, 306)
bezier (224, 209, 202, 214, 190, 227, 195, 242)
}
function lilTail (){
  //mermaidtail 
  noStroke();
fill (215,235,208)
bezier (169, 506, 293, 596, 292, 591, 263, 503);
bezier (263, 505, 384,544, 327, 515, 257, 460)
fill (84,178,134)
noStroke();
bezier (136, 355, 73, 519, 205, 553, 289, 363);
bezier (149, 490, 195, 537, 263, 557, 256, 423);
bezier (181, 516, 248, 542, 291, 509, 257, 455);

}