function preload(){
  // put preload code here
}

//canvas variables
let tilesize;

//background spritesheet
let backgroundSprite;
var backgroundSpriteBuild = {
  width:480,
  height:240,
  row:3,
  column:6,
  partX:480/6,
  partY:240/3
}
var leveltest = [ //32x18
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,13,13,13,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,13,13,13,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,13,13,13,13,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [00,00,00,00,00,00,00,00,00,01,01,01,01,01,01,01,01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [01,01,01,01,01,01,01,01,01,02,02,02,02,02,02,02,02,02,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01],
  [02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],
  [02,02,02,02,02,02,02,02,02,02,03,03,03,03,03,03,14,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02]
];
var lvl = leveltest;

//variables for game
var player = {
  pos:{
    x:100,
    y:100
  },
  vel:{
    x:0,
    y:0,
    speed:0
  },
  size:{
    width:1,
    height:1
  }
}
var playerStatus = {
  jump:2,
  left:true,
  right:true,
  down:true,
  gravity:true
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  // put setup code here
  backgroundSprite = loadImage('../../images/backgroundSpriteSheet.PNG');
  tilesize= windowHeight/18;
  fill('red');
  noStroke();
}





//FUNCITONS



//keypresses
var keyList = {
  w:false,
  a:false,
  s:false,
  d:false,
  space:false
};

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






//funcitons
function translatePos(obj) {
  x1 = floor(obj.pos.x/tilesize);
  y1 = floor(obj.pos.y/tilesize);
  return {x1:x1,y1:y1};
}


function getLevelPos(x,y) {
  x = x*tilesize;
  y = y*tilesize;
  return {x:x,y:y};
}
function getSpritePos(tile) {
  tile--;
  var build = backgroundSpriteBuild;

  var srcx = build.partX*(tile%build.column);
  var srcy = build.partY*(floor(tile/build.column));
  var srcwidth = build.partX;
  var srcheight = build.partY;
  return {x:srcx,y:srcy,w:srcwidth,h:srcheight}
}

function drawLevel() {
  background('rgb(75, 202, 236)');
  for (var y = 0; y < lvl.length; y++) {
    for (var x = 0; x < lvl[y].length; x++) {
      var tile = lvl[y][x];
      if (tile !== 0) {
        var tilepos = getLevelPos(x,y);
        var spritepos = getSpritePos(tile);
        image(backgroundSprite,tilepos.x,tilepos.y,tilesize,tilesize,spritepos.x,spritepos.y,spritepos.w,spritepos.h);
      }
    }
  }
}


function decreaseVel(obj) {
  if (obj.vel.x < 0) {
    obj.vel.x++;
  }
  else if (obj.vel.x > 0) {
    obj.vel.x--;
  }
  else {
    obj.vel.x = 0;
  }
  if (obj.vel.y < 0) {
    obj.vel.y++;
  }

}
function updatePlayer() {
  var playerTile = translatePos(player);
  var x1 = playerTile.x1;
  var x2 = x1+1;
  var y1 = playerTile.y1;
  var y2 = y1+1;


  //check y-axis
  if (player.vel.y >= 0) {
    if (lvl[y2][x1] == 0 && lvl[y2][x2] == 0) { //check blocks underneath
      setGrav();
    }
    else {
      player.vel.y = 0;
      playerStatus.jump = 2;
      playerStatus.left = true;
      playerStatus.right = true;
      //corrects player pos to ground
      if (playerStatus.gravity == true) {
        playerStatus.gravity = false;
        player.pos.y = y2*tilesize-player.size.height*tilesize;
      }
    }
    if (lvl[y1][x1] !== 0 || lvl[y1][x2] !== 0) {
      player.vel.y = 0;
      if (lvl[y2][x2] == 0 && lvl[y2][x1] == 0) {
        player.pos.y = y1*tilesize+tilesize;
      }
    }

  //check x-axis
  if (lvl[y1][x1] !== 0) {//check collition left side
    playerStatus.left = false;
    player.vel.x = 0;
    player.pos.x = x1*tilesize+player.size.width*tilesize;
  }
  if (lvl[y1][x2] !== 0) {//check collition right side
    playerStatus.right = false;
    player.vel.x = 0;
    player.pos.x = x2*tilesize-player.size.width*tilesize;
  }



  }


  //keys that adds speed
  addSpeeds();

  //decrease and add speeds
  decreaseVel(player);
  player.pos.x += player.vel.x;
  player.pos.y += player.vel.y;
}
function setGrav() {
  var maxGrav = 16;
  if (player.vel.y < maxGrav) {
    player.vel.y += 0.7;
  }
  else player.vel.y = maxGrav;
}
function addSpeeds() {
  var maxSpdx = 10;
  if (keyList.d == true && playerStatus.right == true) {//move right
    playerStatus.left = true;
    if (player.vel.x < maxSpdx) {
      player.vel.x += 3;
    }
    else player.vel.x = maxSpdx;
  }
  if (keyList.a == true && playerStatus.left == true) {//move left
    playerStatus.right = true;
    if (player.vel.x < -maxSpdx) {
      player.vel.x -= 3;
    }
    else player.vel.x = -maxSpdx;
  }
  if (keyList.w == true && playerStatus.jump > 0 || keyList.space == true && playerStatus.jump > 0) {//move right
    keyList.space = false;
    keyList.w = false;
    playerStatus.right = true;
    playerStatus.left = true;
    playerStatus.jump -= 1;
    playerStatus.gravity = true;
    player.vel.y = -16;
  }
}

function drawPlayer() {
  updatePlayer();
  rect(player.pos.x,player.pos.y,player.size.width*tilesize,player.size.height*tilesize);
}
function draw() {
  clear();
  // put drawing code here
  drawLevel();
  drawPlayer();
}
