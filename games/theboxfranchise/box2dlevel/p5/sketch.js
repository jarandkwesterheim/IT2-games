let WIDTH;
let HEIGHT;
let block;
var level = [];
  level[0] = [0,0,0,0,0,0,0,1,0];
  level[1] = [0,0,0,0,0,0,0,1,0];
  level[2] = [0,0,0,0,0,0,0,1,0];
  level[3] = [0,0,0,0,0,0,0,1,0];
  level[4] = [0,0,0,0,0,0,0,1,0];
  level[5] = [0,0,0,0,0,0,0,1,0];
  level[6] = [0,0,0,0,0,0,0,1,0];
  level[7] = [0,0,0,0,0,0,0,1,0];
  level[8] = [0,0,0,0,0,0,0,1,0];
  level[9] = [0,0,0,0,0,0,0,1,0];
  level[10] = [0,0,0,0,0,0,0,1,0];
  level[11] = [0,0,0,0,0,0,1,1,0];
  level[12] = [0,0,0,0,0,0,1,1,0];
  level[13] = [0,0,0,0,0,0,1,1,0];
  level[14] = [0,0,0,0,0,0,0,1,0];
  level[15] = [0,0,0,0,0,0,0,1,0];
  level[16] = [0,0,0,0,0,0,0,1,0];
  level[17] = [0,0,0,0,0,0,0,1,0];
  level[18] = [0,0,0,0,1,0,0,1,0];
  level[19] = [0,0,0,0,1,0,0,1,0];
  level[20] = [0,0,0,0,1,0,0,1,0];
  level[21] = [0,0,0,0,1,0,1,1,0];
  level[22] = [0,0,0,0,0,0,1,1,0];

var xoffset = 0;
var yoffset = 0;

var player = {
  x:100,
  y:100,
  width:50,
  height:50,
  accY:0,
  accX:0,
  jumpcount:0
}

var keyList = {
  w:false,
  a:false,
  s:false,
  d:false,
  space:false
};

function preload(){
  // put preload code here
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  block = {
    width:windowWidth/18,
    height:windowHeight/9
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  noStroke();
  // put setup code here
}

function keyPressed() {
  if (keyCode == 87) {
    keyList.w = true;
  }
  if (keyCode == 65) {
    keyList.a = true;
  }
  if (keyCode == 83) {
    keyList.s = true;
  }
  if (keyCode == 68) {
    keyList.d = true;
  }
  if (keyCode == 32) {
    keyList.space = true;
  }
}
function keyReleased() {
  if (keyCode == 87) {
    keyList.w = false;
  }
  if (keyCode == 65) {
    keyList.a = false;
  }
  if (keyCode == 83) {
    keyList.s = false;
  }
  if (keyCode == 68) {
    keyList.d = false
  }
  if (keyCode == 32) {
    keyList.space = false;
  }
}


function calculatePlayerX1(x) {
  for(var i = 0; i < level[x].length; i++) {
    if (level[x][i] == 1) {
      var heightCrntArr = i;
      return heightCrntArr;
    }
  }
}
function calculatePlayerX2(x) {
  for(var i = 0; i < level[x].length; i++) {
    if (level[x][i] == 1) {
      var heightCrntArr = i;
      return heightCrntArr;
    }
  }
}
function setPlayerGrav() {
  //calculate player x to level arr
  var playerArrX1 = floor((player.x-xoffset)/block.width);
  var playerArrX2 = floor((player.x-xoffset+player.width)/block.width);

  if (calculatePlayerX1(playerArrX1) < calculatePlayerX2(playerArrX2)) {
    var heightCrntArr = calculatePlayerX1(playerArrX1);
  }
  else {
    var heightCrntArr = calculatePlayerX2(playerArrX2);
  }
  if (player.y+player.height <= heightCrntArr*block.height) {
    if (player.accY < 15) {
      player.accY += 0.5;
    }
    player.y += player.accY;
  }
  else {
    player.accY = 0;
    player.jumpcount = 0;
    player.y = heightCrntArr*block.height-player.height;
  }
}
function movePlayer() {
  if (keyList.w == true && player.jumpcount <= 10 || keyList.space == true && player.jumpcount <= 10) {
    player.jumpcount += 1;
    player.accY = -10;
  }
  if (keyList.s == true) {
  }
  player.x += player.accX;
  if (player.accX < 0) {
    player.accX += 1;
  }
  else if (player.accX > 0){
    player.accX -= 1;
  }
  setPlayerGrav();
}
function moveLevel() {
  if (keyList.d == true && player.x+player.width+20<WIDTH) {
    if (player.x > WIDTH*0.6 && xoffset > -block.width*(level.length-18)) {
      xoffset -= 5;
    }
    else {
      if (player.accX < 5) {
        player.accX += 2;
      }
      else {
        player.accX = 5;
      }
    }
  }
  if (keyList.a == true) {
    if (player.x <= 100) {
      xoffset += 5;
    }
    else {
      if (player.accX > -5) {
        player.accX -= 2;
      }
      else {
        player.accX = -5
      }
    }
  }
  if (xoffset >= 0) {
    xoffset = 0;
  }
  else if (xoffset <= -block.width*(level.length-18)) {
    xoffset = -block.width*(level.length-18);
  }
}
function drawLevel() {
  for (var x = 0; x < level.length; x++) {
    for (var y = 0; y < level[x].length; y++) {
      if (level[x][y] == 1) {
        var startDrawX = x*block.width+xoffset;
        var startDrawY = y*block.height+yoffset;
        rect(startDrawX,startDrawY,block.width,block.height);
        fill('black');
      }
    }
  }
}


function drawPlayer() {
  fill('red');
  rect(player.x,player.y,player.width,player.height);
  fill('black');
}


function draw() {
  // put drawing code here
  clear();
  moveLevel();
  drawLevel();
  drawPlayer();
  movePlayer();
}
