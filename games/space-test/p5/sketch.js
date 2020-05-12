function preload(){
  // put preload code here
}
let obj;
obj = new Objects;

//variables
  //STARS
var starArr = [];
  //OBJECTS


function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  noStroke();
  generateStars();
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

//SUN
function updateSun() {

}
function drawSun() {
  fill(sun.color);
  circle(sun.pos.x,sun.pos.y,sun.radius);
}

//EARTH
function updateEarth() {
  var distx = earth.pos.x-sun.pos.x;
  var disty = earth.pos.y-sun.pos.y;
  distx = Math.sqrt(distx*distx);
  disty = Math.sqrt(disty*disty);
  var dist = Math.sqrt(Math.pow(distx)+Math.pow(disty));
  var gravForceEarth = gravity(earth.mass,sun.mass,dist); //size of force



  //acc




  //movement
  earth.pos.x += earth.vel.x;
  earth.pos.y += earth.vel.y;
}
function drawEarth() {
  fill(earth.color);
  circle(earth.pos.x,earth.pos.y,earth.radius);
}
