//no progress on the times here...
// please click to interact and trigger time
let b = 240;
let myFont;
let moving = false;
let moveInterval;
let timeFrozen = false; 
let originalMillis, originalSeconds, originalMinutes, originalHours, originalDay, originalMonth, originalYear;
let textX;


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent ("sketch-container");
  angleMode(DEGREES);
  frameRate (100);
  originalMillis = millis();
  originalSeconds = second();
  originalMinutes = minute();
  originalHours = hour();
  originalDays = day();
  originalMonths = month();
  originalYears = year();
  textX = -200; 
}

function draw() {
  background(0);
  textFont('Avenir', 20);
  textSize (20)
  text('press mouse to shoot', 390, 75)
  
  // the bullet
  noStroke();
  fill(212, 0, 0);
  rect(b, 60, 35, 20, 8);

  // drawing the gun
  push();
  fill(255);
  noStroke();
  rect(80, 45, 200, 45, 10);
  pop();
  push();
  fill(255);
  translate(0, 70);
  rotate(-50);
  noStroke();
  rect(0, 70, 90, 40, 10);
  pop();
  stroke(255);
  strokeWeight(5);
  noFill();
  rect(100, 80, 60, 30, 10);
  
  // trigger of gun
  stroke(255);
  strokeWeight(5);
  noFill();
  curve(100, 45, 120, 56, 150, 100, 100, 90);
  
  // current time
  let i = millis();
  let s = second();
  let m = minute();
  let h = hour();
  let d = day();
  let o = month();
  let y = year();
  
  // time logic
  if (!timeFrozen) {
    // normal time
    d = originalDays;
    i = originalMillis;
    s = originalSeconds;
    m = originalMinutes;
    h = originalHours;
    o = originalMonths;
    y = originalYears;
  } else {
    i = (i - 1 + 1000) % 1000;
    if (i === 999) {
      s = (s - 1 + 60) % 60; 
      if (s === 59) {
        m = (m - 1 + 60) % 60; 
        if (m === 59) {
          h = (h - 1 + 24) % 24; 
        }
      }
    }
  }

  // text
  textX += 2; 
  if (textX > width) { 
     textX = -textWidth(` ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)}`, textX); 
  }

  // Display the time
  textSize(60);
  noStroke();
  textStyle(ITALIC);
  fill(255);
  textFont('Avenir', 30);;
  
  // Displaying time values
  text(`${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)} ${nf(i, 1, 1)}`, textX, 580);
  
  text(` ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)}  ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)} ${nf(s, 1, 1)}  ${nf(s, 1, 1)}`, textX, 520);
  
  text(` ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)} ${nf(m, 1, 1)}`, textX, 460);
 
  text(` ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)} ${nf(h, 1, 1)}`, textX, 400);
  
  text(` ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)} ${nf(d, 1, 1)}`, textX, 345); 
  
  text(` ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)} ${nf(o, 1, 1)}`, textX, 290); 
  
   text(` ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)} ${nf(y, 1, 1)}`, textX, 235); 

if (mouseIsPressed){
  timeFrozen= !timeFrozen
}

}

function mousePressed() {
  // Freeze time
  timeFrozen = !timeFrozen; 
  if (!moving) {
    moving = true;
    moveInterval = setInterval(() => {
      b += 30; 
      if (b > 600) {
        clearInterval(moveInterval); 
        moving = false; 
      }
    }, 250); 
  }
}

function mouseReleased() {
    if (moving) {
    clearInterval(moveInterval);
    moving = false; 
  }
} 
