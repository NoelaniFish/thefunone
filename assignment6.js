//the array of data I am gathering from or "my list" of genres I listen to in a week
let data = [
    { day: "Thursday, 17th", genres: { JazzBossaNova: 16, Pop: 3, Soul: 17 } },
    { day: "Wednesday, 16th", genres: {Soul: 7} },
    { day: "Tuesday, 15th", genres: { JazzBossaNova: 1, Pop: 1, Soul: 11, Disco: 2, Funk: 6 } },
    { day: "Monday, 14th", genres: { Rock: 15, Hyperpop: 12, Techno: 4, Soul: 4, Funk: 10, Foreign: 10 } },
    { day: "Sunday, 13th", genres: { Pop: 2, Soul: 52 } },
    { day: "Saturday, 12th", genres: { Soul: 17 } },
    { day: "Friday, 11th", genres: { Rap: 1, Indie: 8, RnB: 1, Techno: 1, Pop: 4, Soul: 17, Funk: 11 } },
    { day: "Thursday, 10th", genres: { Rap: 1, RnB: 2, Techno: 4, Soul: 12, Funk: 2 } },
    { day: "Wednesday, 9th", genres: { RnB: 4, Indie: 2, Techno: 16, Pop: 1, Soul: 24, Funk: 7 } }
  ];
  
  //setting up my variables that I will input later
  let maxAmplitude = 600; 
  let yoff = 110; 
  let activeDayIndex = -1; 
  let genreColors; 
  
  //the setup of the canvas
  function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent ("sketch-container");
    noFill();
    
    // setting up colors, I looked towards making them relate to the genre like synesthesia
    genreColors = {
      JazzBassaNova: color(140, 86, 137),// dark muted purple
      Pop: color(217, 50, 136),// bubblegum pink
      Soul: color(245, 200, 66),//golden yellow
      Disco: color(76, 160, 245),//cerelean blue
      Funk: color(202, 197, 235), //pastel purple
      Rock: color(173, 14, 40),// dark red
      Hyperpop: color(22, 138, 86),//forest green
      Techno: color(186, 242, 82),//brat green
      Foreign: color(176, 84, 145), //muave
      Rap: color(110, 47, 51), //brick red
      RnB: color(42, 25, 227),//dark blue
      Indie: color(213, 237, 245) //pastel cloud blue
    };
    
  //making the buttons appear without function
    createDayButtons();
  }
  //draw function
  function draw() {
  //making the bg black
    background(0);
    //text for explanation
    fill(255)
    //always confused on when there is stroke or not with text- sometimes my text gets warped
    noStroke();
    //love italic
    textStyle(ITALIC)
    textFont('Avenir', 20);
    //labels what to do
    text ('hover over the day to see what I listen to!',350,567);
    //making it so when you hover or "activate the day", waves appear
    if (activeDayIndex !== -1) {
      displayDayWaves(activeDayIndex);
    }
  }
  
  //function of buttons- easy visual tool
  function createDayButtons() {
    let buttonY = 90;
    // for loop for button placement
    for (let i = 0; i < data.length; i++) {
      let dayButton = createButton(data[i].day);
      // button position
      dayButton.position(60, buttonY) + 20 ;
      //mouse hoveriing affect through event
      dayButton.mouseOver(() => {
        activeDayIndex = i; 
      });
      dayButton.mouseOut(() => {
        activeDayIndex = -1; 
      });
      //distance btw buttons- wanted it to fill the whole screen
      buttonY += 40; 
    }
  }
  
  // waves for each day/genre
  
  //displaying and describes sound / genre waves
  function displayDayWaves(dayIndex) {
    let day = data[dayIndex];
    let genreNames = Object.keys(day.genres);
    
    let yStart = 100; 
    yoff += 0.07; 
    let xoff = 0; 
  //for loop for waves
    for (let j = 0; j < genreNames.length; j++) {
      let genre = genreNames[j];
      let count = day.genres[genre];
  //so the waves are just lines and not shapes
      noFill();
      //making the stroke fit the assigned color
      stroke(genreColors[genre] || color(0)); 
      //making speed genre speed
      let amplitude = map(count, 0, 82, 10, maxAmplitude);
      let speed = genreSpeed(genre); 
      
    //this all establishes the waves and its output
  //creating/establishing visuals of waves like line width and making the shape begin
      strokeWeight (4)
   //establishes the multitude/ without it it becomes blurred
      beginShape();
  //for loop that adds to the wave as it spans across the canvas depending on how often its listened to
     for (let x = 0; x < width; x += 5) { 
  //this creates the wave frequency/ amplitude that is mapped to the genre so that it is larger with larger listened to genres
     let y = yStart + sin(x * 0.02 + yoff * speed) * amplitude; 
  // before I added the noise factor, the waves were mechanical and robotic- this smooths them out
   //I create a random integer btw 0 and 1 that is controlled by xoff and yoff, with some differentiation for wave- likeness
    let noiseFactor = map(noise(xoff, yoff), 0, 1, -10, 10); 
    //calculates vertex and smooths sine function
      vertex(x, y + noiseFactor);
       // each point on the wave is slightly different in noise value so this makes it not static
       xoff += 0.02; 
      }
  //self- explanatory
   endShape();
  
     yStart += 40; 
   }
  }
  
  //this determines the speed of each individual wave, not necessary but fun nonetheless
  function genreSpeed(genre) {
    switch (genre) {
      case 'JazzBassaNova': return 1.8;  
      case 'Soul': return 1.2;
      case 'Rock': return 2.4;           
      case 'Hyperpop': return 3.0;
      case 'Pop': return 2.0;
      case 'Techno': return 2.8;
      case 'Funk': return 2.2;
      case 'Disco': return 2.4;
      case 'RnB': return 1.8;
      default: return 2.0;              
    }
  }
  