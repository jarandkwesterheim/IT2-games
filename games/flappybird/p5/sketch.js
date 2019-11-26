function preload(){
  // put preload code here
}

var HEIGHT = 0;
var WIDTH = 0;
let playermodel;


//variables
var timer = 0;

var gameMode = 'normal';

var xPos = 300;
var yPos = 200;
var rectWidth = 51;
var rectHeight = 39;
var yAcc = 0;

var status = 'alive';
var validKey = 32;
var msg = 'press "SPACE" to fly';

var obsList = {};
function obs(id,x,y,height) {
  var obsect = {
    id:id,
    x:x,
    y:y,
    width:70,
    height:height,
    status:'active'
  }
  obsList[id] = obsect;
};
var obsSpd = 6;
var obsDistance = 500;
var obsStarPosX = 2300;
var obsCount = 5;
var obsXposExtra = 0;


var points = 0;
var pointMeasure = 0;


var cloudCount = 1;
var buildingCount = 3;
var buildingX = 400;


var sunPosX = xPos*2;
var sunPosY = 200;
var moonPosX = xPos*2;
var moonPosY = HEIGHT+200;
var backgroundClr = 'rbg(100, 211, 222)';
var cloudClr = 'rgb(233, 233, 233)';

var fps = 60;


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  frameRate(fps);
  obs('O1',1300,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
  obs('O2',1800,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
  obs('O3',2300,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
  obs('O4',2900,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
  obs('O5',3500,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  playermodel = loadImage('../playermodel.png')//loads playermodel
  // put setup code here
}



//FUNCTIONS

function setFPS(x) {
  fps=x;
  setup();
}


function keyPressed() {
  if (keyCode === validKey) {
    validKey = 32;
    if (status == 'dead') {
      yAcc = -3;
      msg = 'press "SPACE" to fly';
      yPos = 200;
      status = 'alive';
      obsSpd = 6;
      obsCount = 5;
      obsXposExtra = 0;
      obsList = {};
      obs('O1',1300,100-windowHeight/2-Math.random()*windowHeight/3-70,windowHeight);
      obs('O2',1800,100-windowHeight/2-Math.random()*windowHeight/3-70,windowHeight);
      obs('O3',2300,100-windowHeight/2-Math.random()*windowHeight/3-70,windowHeight);
      obs('O4',2900,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
      obs('O5',3500,100-windowHeight/2-Math.random()*windowHeight/3-40,windowHeight);
      randomizeCloud(3);
      points = 0;
      pointMeasure = 0;
    }
    else if (status == 'alive') {
      msg = '';
      yAcc = -15;
    }
  }
}
function writeMsg() {
  fill(10);
  if (msg != '') {
    textSize(32);
    text(msg,windowWidth/2-100,windowHeight/3);
  }
  textSize(50);
  fill('rgb(251, 236, 39)');
  text(points,windowWidth/2-20,windowHeight/7);
}
function checkHeight() {
  if (yPos+rectHeight < windowHeight*0.9-yAcc) {
    yPos += yAcc;
    if (yAcc < 0) {
      yAcc += 0.9;
    }
    else {
      yAcc += 0.7;
    }
    if (yPos < -100) {
      yPos = -100;
    }
  }
  else {
    gameOver();
    yPos = windowHeight*0.9-rectHeight;
  }
}

function checkLength() {
  for(item in obsList){
    if (obsList[item].x < xPos && obsList[item].status == 'active') {
      points++;
      obsList[item].status = 'inactive';
    }
  }
}

function generateobstacles() {
  if (points > pointMeasure) {
    var id = points+3;
    obs('O'+id,xPos+5*obsDistance,-windowHeight/2-Math.random()*windowHeight/3-70,windowHeight);
    randomizeCloud(1);
    randomizeBuilding(2);
    pointMeasure = points;
  }
}
function drawobstacles() {
  fill(0, 105, 29);
  for(item in obsList){
    stroke('black');
    rect(obsList[item].x,obsList[item].y,obsList[item].width,obsList[item].height);
    rect(obsList[item].x-5,obsList[item].y+obsList[item].height,obsList[item].width+10,20);

    rect(obsList[item].x,obsList[item].y+obsList[item].height+230,obsList[item].width,obsList[item].height);
    rect(obsList[item].x-5,obsList[item].y+obsList[item].height+230,obsList[item].width+10,20);
    noStroke();
  }
}
function updateobstacles() {
  obsXposExtra = obsSpd;
  for(item in obsList) {
    obsList[item].x -= obsXposExtra;
  }
}

function testCollision() {
  if (gameMode !== 'easy') {
    for(item in obsList){
      if (xPos+rectWidth > obsList[item].x && xPos < obsList[item].x+obsList[item].width) {
        if (yPos > obsList[item].y+obsList[item].height+20 && yPos < obsList[item].y+obsList[item].height+200-20) {
          return;
        }
        gameOver();
      }
    }
  }
}
function gameOver() {
  msg = 'GAME OVER    "R" to retry';
  status = 'dead';
  validKey = 82;
  obsSpd = 0;
  obsCount = 3;
  obsXposExtra = 0;
  sunPos = 0;
}

//clouds
var cloudList = {};
function genCloud(id,x,y,length,height) {
  var cloud = {
    id:id,
    x:x,
    y:y,
    length:length,
    height:height
  }
  cloudList[id] = cloud;
}
genCloud('C1',1500,300,300,30);

function randomizeCloud(c) {
  for (var x = 0; x < c; x++){
    if (Math.random()*1 > 0.5) {
      for (var i = 0; i < Math.random()*1; i++) {
        //randomize variables for cloud
        var randX = (Math.random()*10)*100+1500;
        var randY = (Math.random()*22)*10+100;
        var randLength = (Math.random()*30)*10+100;
        var randHeight = (Math.random()*4)*10+20;

        cloudCount++;
        genCloud('C'+cloudCount,randX,randY,randLength,randHeight);
      }
    }
  }
}
randomizeCloud(1);

function updateClouds() {
  for(item in cloudList){
    cloudList[item].x -= obsSpd*0.5-1;
    drawCloud(cloudList[item].x,cloudList[item].y,cloudList[item].length,cloudList[item].height);
  }
}
function drawCloud(x,y,length,height) {
  fill(cloudClr);
  rect(x,y,length,height);
}


//buildings
var buildingList = {};
function genBuilding(id,x,size,colour) {
  var building = {
    id:id,
    x:x,
    size:size,
    colour:colour
  }
  buildingList[id] = building;
}

function randomizeBuilding(c) {
  for (var x = 0; x < c; x++) {
    if (Math.random()*1>0.2) {
      buildingX += Math.random()*900;
      for (var i = 0; i < Math.random()*2+1; i++) {
        buildingCount++;
        //sets colour
        var colour = Math.random()*3;
        if (colour>2) {
          colour = 'rgb(176, 91, 29)';
        }
        else if (colour>1) {
          colour = 'rgb(181, 181, 181)';
        }
        else {
          colour = 'rgb(145, 134, 108)';
        }

        genBuilding('B'+buildingCount,buildingX,(Math.random()*6)*10+10,colour);
        buildingX += ((Math.random()*6)*10+10)+100;
      }
    }
  }
}
randomizeBuilding(3);

function drawBuilding(x,size,colour) {
  fill(colour);
  rect(x,windowHeight*0.87-(size+200),size+100,size+200);
  fill(windowLight);
  var gridX = (size+100)/8;
  var gridY = (size+200)/10;
  for(var i = 0; i<3; i++){
    rect(x+gridX*1,windowHeight*0.87-(size+200)+3*i*gridY+1*gridY,gridX*2,gridY*2);
  }
  for(var i = 0; i<3; i++){
    rect(x+gridX*5,windowHeight*0.87-(size+200)+3*i*gridY+1*gridY,gridX*2,gridY*2);
  }
}
function updateBuildings() {
  for(item in buildingList){
    buildingList[item].x -= obsSpd*0.8;
    drawBuilding(buildingList[item].x,buildingList[item].size,buildingList[item].colour);
  }
  buildingX -= obsSpd*0.8;
}


//sun and moon cycle and drawings
function updateSun() {
  if (sunPosY > windowHeight) {
    backgroundClr = 'rgb(38, 42, 68)';
    windowLight = 'rgb(250, 214, 60)';
    cloudClr = 'rgb(88, 88, 88)';
    moonPosY += 0.2;
    if (obsSpd == 0) {
      moonPosX += 0.3;
    }
    if (moonPosY > windowHeight+100) {
      sunPosY = -100;
      sunPosX = xPos*2;
    }
    drawMoon()
  }
  else {
    backgroundClr = 'rgb(100, 211, 222)';
    windowLight = 'rgb(63, 224, 220)';
    cloudClr = 'rgb(233, 233, 233)';
    moonPosY = -100;
    moonPosX = xPos*2;
    sunPosY += 0.2;
    if (obsSpd == 0) {
      sunPosX += 0.3;
    }
    drawSun();
  }
}
function drawMoon() {
  fill(191, 194, 50);
  circle(moonPosX,moonPosY,150);
  fill(38, 42, 68);
  circle(moonPosX+40,moonPosY,140);
}
function drawSun() {
  fill(255, 237, 3);
  circle(sunPosX,sunPosY,200)
}



//player image load
function drawPlayer() {
  image(playermodel,xPos,yPos,rectWidth,rectHeight);
}

function backgroundClose() {
  fill(44, 203, 24);
  stroke('black');
  rect(0,windowHeight*0.90,windowWidth,windowHeight);
}
function backgroundFar() {
  fill(66, 162, 93);
  rect(0,windowHeight*0.87,windowWidth,windowHeight);
}



//general function for drawing
function draw() {
  clear();
  background(backgroundClr);
  // put drawing code here
  updateSun();
  backgroundFar();
  checkHeight();
  checkLength();
  generateobstacles();
  updateClouds();
  updateBuildings();
  drawobstacles();
  updateobstacles();
  testCollision();
  backgroundClose();
  noStroke();
  drawPlayer();
  writeMsg();
}
