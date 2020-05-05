function preload(){
  // put preload code here
}

//variables
  //STARS
var starArr = [];
  //OBJECTS
let sun, earth;


function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  noStroke();
  generateStars();
  generateObjects();
}

function draw() {
  clear();
  // put drawing code here

  //background
    //black panel
  fill('rgb(0, 0, 0)');
  rect(0,0,canvas.width,canvas.height);
    //stars
  drawStars();

    //sun
  updateSun();
  drawSun();

    //earth
  updateEarth();
  drawEarth();

}

//GRAVITY
function gravity(m1,m2,r) {
  var γ = (6.67408e-11);
  let f;
  f = (γ*m1*m2)/(Math.pow(r,2));
  return f;
}


//STARS
function generateStars() {
  var starCount = 1000;
  var starSizeMin = 1;
  var starSizeMax = 3;
  let starX, starY, starS;

  //randomize position
  for (var i = 0; i < starCount; i++) {
    //randomize x position
    starX = Math.floor(Math.random()*(canvas.width))+1; //generates stars 2x size of screen, positions in middle for futher movement around
    starY = Math.floor(Math.random()*(canvas.height))+1; //--||--
    starS = Math.floor(Math.random()*(starSizeMax-starSizeMin))+1+starSizeMin;

    //put in array
    starArr[i] = [starX, starY, starS];
  }
  starArr;
}
function drawStars() {
  var starColor = 'rgb(221, 222, 211)';
  for (var i = 0; i < starArr.length; i++) {
    fill(starColor);
    circle(starArr[i][0],starArr[i][1],starArr[i][2]);
  }
}

//OBJECTS
function generateObjects() {
  sun = {
    pos:createVector(canvas.width/2,canvas.height/2),
    vel:createVector(0,0),
    radius:60,
    color:"rgb(236, 240, 56)",
    mass:1.989e30
  };
  earth = {
    pos:createVector(canvas.width/4,canvas.height/2),
    vel:createVector(0,0),
    radius:20,
    color:"rgb(56, 141, 240)",
    mass:5.972e24
  }
}

//SUN
function updateSun() {

}
function drawSun() {
  fill(sun.color);
  circle(sun.pos.x,sun.pos.y,sun.radius);
}

//EARTH
function updateEarth() {
  var distx = Number(earth.pos.x-sun.pos.x);
  var disty = Number(earth.pos.y-sun.pos.y);
  var dist = Math.hypot(distx,disty);
  var gravForceEarth = gravity(earth.mass,sun.mass,dist); //size of force



  //acc
  earth.vel.x += gravForceEarth/earth.mass*0.00000000000000001;



  //movement
  earth.pos.x += earth.vel.x;
  earth.pos.y += earth.vel.y;
}
function drawEarth() {
  fill(earth.color);
  circle(earth.pos.x,earth.pos.y,earth.radius);
}
