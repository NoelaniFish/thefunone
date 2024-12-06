function setup() {
   let canvas = createCanvas(800, 450);
   canvas.parent ("sketch-container");
   angleMode(DEGREES);}
  
  function draw() {
    background(12,165,252);
  
    //hidden message
   textFont('Avenir', 17.5);
    textStyle(BOLD);
    text ('i finally found your watch ... but please help... i am trapped with an absurdly long arm',81,397);
    textFont('Avenir', 10);
    textStyle(ITALIC);
     text ('oh no, help me, oh no, please, oh no, ahh, oh no, help..., oh no, not this, oh no, anything but this, please not again, really, its painful here, ohhhhhhhhhhhhhhhhhhh',81,377);
    
    //grass
    fill (121,170,2);
     noStroke ();
    rect (0, 350, 800, 105);
  
    //shadow
    fill (91,135,5);
    rect (70, 350, 800, 60, 20);
    
    //clouds
  iLoveCloud()
  
    
    //this is the skeleton
      rect (270, 170, 580, 10);
     circle(270, 185, 15);
      circle(270, 165, 15);
    rect (90, 180, 60, 7);
     rect (82, 160, 70, 7);
      rect (95, 140, 60, 7);
      rect (105, 205, 50, 7);
    
    
    //this is the hand and arm
    //arm
    fill (231,188,145);
     noStroke ();
    rect (200, 150, 600, 55);
    //palm
    fill (231,188,145);
   noStroke ();
    rect (150, 130, 95, 95, 20);
    
    //thumb
      push();
    fill (231,188,145);
    translate(100, 70);
    rotate (20);
   noStroke ();
    rect (40, 13, 60, 20, 20);
     pop();
    
     //thumb pad
    fill (231,188,145);
   noStroke ();
    rect (170, 110, 70, 30, 20);
     fill (231,188,145);
   noStroke ();
    rect (170, 115, 70, 30, 20);
   
    //pointer finger
   noStroke ();
    fill (231,188,145);
    rect (90, 130, 90, 20, 20);
   
    //middle finger
    fill (231,188,145);
   noStroke ();
    rect (70, 152, 120, 20, 20);
   
    //ring finger
   fill (231,188,145);
   noStroke ();
    rect (80, 175, 100, 20, 20);
    
    //pinky finger
    fill (231,188,145);
   noStroke ();
    rect (100, 200, 80, 18, 20);
    
    //nails 
    fill (247,221,196);
    rect (105, 205, 10, 10, 2);
    fill (247,221,196);
    rect (85, 180, 10, 10, 2);
    fill (247,221,196);
    rect (75, 155, 10, 10, 2);
    fill (247,221,196);
    rect (95, 135, 10, 10, 2);
    push()
    translate(120,60)
    rotate(30)
    fill (247,221,196);
    rect (36, 28, 10, 10, 2);
    pop()
    
    //this is all the watch
    //watch band 
     push();
    fill (252,252,252);
    rect (260, 150, 30, 230);
     fill (227,227,227);
    rect (260, 150, 30, 8);
    fill (244,244,244);
    rect (260, 170, 30, 8);
    fill (227,227,227);
    rect (260, 190, 30, 8);
     fill (244,244,244);
    rect (260, 210, 30, 8);
    fill (227,227,227);
    rect (260, 230, 30, 8);
       fill (244,244,244);
    rect (260, 250, 30, 8);
    fill (227,227,227);
    rect (260, 270, 30, 8);
        fill (244,244,244);
    rect (260, 290, 30, 8);
     fill (227,227,227);
    rect (260, 310, 30, 8);
    fill (244,244,244);
    rect (260, 330, 30, 8);
    fill (227,227,227);
    rect (260, 350, 30, 8);
     fill (244,244,244);
    rect (260, 370, 30, 8);
  
    //watch face
     stroke(181,181,181)
    strokeWeight (4)
    fill (210,210,210)
    circle(275, 200, 60);
    noStroke();
    fill (275,275,275)
    circle(275, 200, 35);
    
    //lines for watch
     noStroke () 
     fill (65,65,65);
    rect (260, 200, 15, 2);
     fill (65,65,65);
    rect (272.5, 190, 2, 10);
    fill (95,95,95);
    rect (255, 185, 2, 2);
      fill (95,95,95);
    rect (250, 200, 2, 2);
    fill (95,95,95);
    rect (290, 185, 2, 2);
    fill (125,125,125);
    rect (273, 175, 2, 2);
    fill (125,125,125);
    rect (282, 178, 2, 2);
     fill (125,125,125);
    rect (262, 178, 2, 2);
    fill (125,125,125);
    rect (295, 195, 2, 2);
    fill (125,125,125);
    rect (294, 210, 2, 2);
    fill (125,125,125);
    rect (287, 217, 2, 2);
     fill (125,125,125);
    rect (276, 221, 2, 2);
    fill (125,125,125);
    rect (265, 220, 2, 2);
    fill (125,125,125);
    rect (256, 213, 2, 2);}
  
  function iLoveCloud(){
      fill (240,238,255, 150);
    rect (10, 20, 200, 40, 100);
    rect (50, 40, 200, 60, 100);
     rect (70, 20, 150, 90, 100);
    //cloud2
    rect (500, 235, 180, 70, 100);
   rect (550, 235, 180, 70, 100);
    rect (565, 209, 180, 70, 100);
      
  }
    //interaction
   function mousePressed() {
    blendMode (DIFFERENCE) ;}
  
  function mouseReleased(){
    blendMode (NORMAL) ;}
  
  