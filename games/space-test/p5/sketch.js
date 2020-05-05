function preload(){
  // put preload code here
}

//variables
  //STARS
var starArr = [];
  //SUN
let sunr, sunc, sunpos, sunvel;


function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  noStroke();
  generateStars();
  generateSun();
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

}



//GRAVITY
function gravity(m1,m2,r) {
  let f;
  var γ = (6.67408*10^-11);
  f = (γ*m1*m2)/(r^2);
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
    starX = Math.floor(Math.random()*(canvas.width))+1-canvas.width/4; //generates stars 2x size of screen, positions in middle for futher movement around
    starY = Math.floor(Math.random()*(canvas.height))+1-canvas.height/4; //--||--
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
function generateSun() {
  sunr = 60;
  sunc = "rgb(236, 240, 56)";
  sunpos = {x:canvas.width/4,y:canvas.height/4};
}
function updateSun() {

}
function drawSun() {
  fill(sunc);
  circle(sunpos.x,sunpos.y,sunr);
}
