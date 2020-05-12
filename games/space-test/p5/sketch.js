function preload(){
  // put preload code here
}
//import declare
let stars, obj, sun, earth, force;

//variables
  //STARS
var starArr = [];
  //OBJECTS



function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  // put setup code here
    // all imports from other scripts
  stars = new Stars;
  obj = new Objects;
  sun = new Sun;
  earth = new Earth;
  force = new ForceHandeling;
    //rules
  noStroke();
    //setup
  stars.generate();
}

function draw() {
  clear();
  //background
    //black panel
  fill('rgb(0, 0, 0)');
  rect(0,0,canvas.width,canvas.height);

    // stars
  stars.draw();

    // sun
  sun.update();
  sun.draw();

    // earth
  earth.update();
  earth.draw();
}
