function preload(){
  // put preload code here
}
// import declare
let stars, obj, sun, earth, force;

// variables
  // STARS
var starArr = [];
  // OBJECTS
  // SCALING
var zoomMul = 0.1;
var offsetx = 0;
var offsety = 0;




function setup() {
  createCanvas(1440*1,826*1);
  frameRate(60);
  // put setup code here
    // all imports from other scripts
  stars = new Stars;
  obj = new Objects;
  force = new ForceHandeling;
    //rules
  noStroke();
    //setup
  stars.generate();
  mouseX = canvas.width/2;
  mouseY = canvas.height/2;
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
  obj.update(obj.sun);
  obj.draw(obj.sun);

    // earth
  obj.update(obj.earth);
  obj.draw(obj.earth);

    // moon
  obj.update(obj.moon);
  obj.draw(obj.moon);
  //frameRate(0)
  // CHECK FOR MOVING WITH CONTROLLER
  controller();
}



// CONTROLLER

  // ZOOM
function mouseWheel(event) { // gives response positive or negative
  if (event.delta < 0) {
    zoomMul += 0.05; // zoom in
  } else {
    zoomMul -= +.05; // zoom out
  }


  if (zoomMul < 0.1) {
    zoomMul = 0.1; // maxed zoomed out
  }
  if (zoomMul > 5) {
    zoomMul = 5; // maxed zoomed in
  }
}

  // MOVING VIEW
  function controller() {

    // MILD MOVEMENT
    if (mouseX < canvas.width*2/10) {
      offsetx += 3; // if mouse is more than 90%, move cam right
    }
    if (mouseX > canvas.width*8/10) {
      offsetx -= 3; // if mouse is less than 10%, move cam left
    }
    if (mouseY < canvas.height*2/10) {
      offsety += 3; // if mouse is more than 90%, move cam down
    }
    if (mouseY > canvas.height*8/10) {
      offsety -= 3; // if mouse is less than 10%, move cam up
    }

    // SEVERE MOVEMENT
    if (mouseX < canvas.width*1/10) {
      offsetx += 4; // if mouse is more than 90%, move cam right
    }
    if (mouseX > canvas.width*9/10) {
      offsetx -= 4; // if mouse is less than 10%, move cam left
    }
    if (mouseY < canvas.height*1/10) {
      offsety += 4; // if mouse is more than 90%, move cam down
    }
    if (mouseY > canvas.height*9/10) {
      offsety -= 4; // if mouse is less than 10%, move cam up
    }


    // LIMIT MOVING
    if (offsetx > 0) {
      offsetx = 0;
    }
    if (offsetx < -1600*zoomMul) {
      offsetx = -1600*zoomMul
    }
    if (offsety > 0) {
      offsety = 0;
    }
    if (offsety < -900*zoomMul) {
      offsety = -900*zoomMul
    }
  }
