function preload(){
  // put preload code here
}
// import declare
let stars, obj, sun, earth, force, controller, collision;

// variables
  // STARS
var starArr = [];
  // OBJECTS
  // SCALING
var zoomMul = 0.1;
let offset, offsetlength;




function setup() {
  createCanvas(1440*1,826*1);
  frameRate(60);
  // put setup code here
    // all imports from other scripts
  stars = new Stars;
  obj = new Objects;
  force = new ForceHandeling;
  controller = new Controller;
  collision = new Collision;
    //rules
  noStroke();
    //setup
  stars.generate();
  mouseX = canvas.width/2;
  mouseY = canvas.height/2;
    //offset
  offset = createVector(obj.sun.pos.x,obj.sun.pos.y); // center vector
}

function draw() {
  clear();
  //background
    //black panel
  fill('rgb(0, 0, 0)');
  rect(0,0,canvas.width,canvas.height);

    // stars
  stars.draw();

    // planets
  obj.updateAll();
  obj.drawAll();

  // CHECK FOR MOVING WITH CONTROLLER
  controller.move(mouseX,mouseY);
}
