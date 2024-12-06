let bgColor;      
let circleColor;  

function setup() {
 let canvas = createCanvas(600, 600);
 canvas.parent ("sketch-container");
  noFill();
  bgColor = color(255, 0, 0);  
  circleColor = color(8, 19, 252);  
}

function draw() {
  background(bgColor);  
  push();
  textFont('Avenir', 30);
  text ('you are a rat',210,307);
  pop();
   textFont('Avenir', 30);
  text ('you are a rat',210,337);
  textFont('Avenir', 30);
  text ('you are a rat',210,277);
  let centerX = width / 2;
  let centerY = height / 2;
  let maxRadius = dist(0, 0, width, height); 

  let widthMultiplier = map(mouseX, 0, width, 0.5, 2);  
  let heightMultiplier = map(mouseY, 0, height, 0.5, 2); 
  
  stroke(circleColor);  
  let strokeThick = map(mouseY, 0, height, 1, 10);  
  strokeWeight(strokeThick);  

  for (let r = 0; r <= maxRadius; r += 10) {
    ellipse(centerX, centerY, r * 2 * widthMultiplier, r * 2 * heightMultiplier);  

  
  }
}
//interaction
function mousePressed() {
 
  bgColor = color(random(255), random(255), random(255));
  
  circleColor = color(random(255), random(255), random(255));
}
