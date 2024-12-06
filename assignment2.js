let f = 255;
let h = 205;
let j = 176;
let n = 214;
let o = 145;
let s = 12;
let m = 227;
let u = 129;
let t = 102;
let r = 97;
let g = 63;
let b = 53;

// Variables for eye movement
let eyeMovement = 0;
let eyeSpeed = 0.1;

function setup() {
let canvas = createCanvas(400, 400);
canvas.parent ("sketch-container");
frameRate(100);
// Randomize the eye colors at the start
r = random(0, 255);
g = random(0, 255);
b = random(0, 255);
}

function draw() {
background(0);

  // Continuously randomize face color
push();
fill(f, h, j);
noStroke();

let f1 = mouseX / 50 + 300;
let f2 = mouseY / 20 + 220;
let f3 = mouseX / 5;
let m1 = mouseX / 2 + f2 / 6;
let m2 = f1 / 12;
rectMode(CENTER);
rect(200, height / 2, f2, f1, f3);

  // Ears
circle(60, 210, 70);
circle(340, 210, 70);

  // Eyes
noStroke();
fill(255, 253, 229, 180);
ellipse(130, 200, 40, 20);
ellipse(260, 200, 40, 20);

  // Eye movement animation
eyeMovement = sin(frameCount * eyeSpeed) * 5; // Adjust the range and speed of movement

  // Colored eyes
fill(r, g, b);
ellipse(130 + eyeMovement, 200, 20, 20);
ellipse(260 + eyeMovement, 200, 20, 20);

  // Pupils
fill(0);
ellipse(130 + eyeMovement, 200, 10, 10);
ellipse(260 + eyeMovement, 200, 10, 10);

  // Nose
fill(n, o, s);
rect(195, 190, 30, 80, 100);

  // Mouth
fill(m, u, t);
rect(195, 280, mouseX, mouseY, 200);
}

function mousePressed() {
frameRate(100);
f = random(0, 255);
h = random(0, 255);
j = random(0, 255);

  // Eye colors
r = random(0, 255);
g = random(0, 255);
b = random(0, 255);

  // Nose colors
n = random(0, 255);
o = random(0, 255);
s = random(0, 255);

  // Mouth
m = random(0, 255);
u = random(0, 255);
t = random(0, 255);
}

function mouseReleased() {
f = 255;
h = 205;
j = 176;

n = 214;
o = 145;
s = 126;

m = 227;
u = 129;
t = 102;

r = 97;
g = 63;
b = 53;
}
