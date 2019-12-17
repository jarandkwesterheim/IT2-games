
var HEIGHT = window.innerHeight;
var WIDTH = window.innerWidth;
document.body.height = HEIGHT;
document.body.width = WIDTH;

//canvas
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

if (HEIGHT*1.3<WIDTH) {
  var size = HEIGHT*1.3;
  canvas.height = size*0.6;
  canvas.width = size;
}
else {
  var size = WIDTH*0.9;
  canvas.height = size*0.6;
  canvas.width = size;
}
var canvasTileX = canvas.width/32;
var canvasTileY = canvas.height/18;


var level = [ //32x18
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,13,13,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,13,13,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
function drawTiles() {
  ctx.fillStyle = "black";
  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {
      var xPos = j%32*canvasTileX;
      var yPos = i*canvasTileY;
      if (level[i][j] == 1) {
        ctx.fillRect(xPos,yPos,canvasTileX,canvasTileY);
        ctx.stroke();
      }
      else if (level[i][j] == 2) {
        ctx.beginPath();
        ctx.moveTo(xPos,yPos+canvasTileY);
        ctx.lineTo(xPos+canvasTileX,yPos);
        ctx.lineTo(xPos+canvasTileX,yPos+canvasTileY);
        ctx.lineTo(xPos,yPos+canvasTileY);
        ctx.closePath();
        ctx.fill();
      }
      else if (level[i][j] == 3) {
        ctx.beginPath();
        ctx.moveTo(xPos,yPos+canvasTileY);
        ctx.lineTo(xPos,yPos);
        ctx.lineTo(xPos+canvasTileX,yPos+canvasTileY);
        ctx.lineTo(xPos,yPos+canvasTileY);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}
drawTiles();

function clearCanvas() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}


 var player = {
   x:3*canvasTileX,
   y:10*canvasTileY,
   width:canvasTileX*1,
   height:canvasTileY*1,
   gravity:canvas.height/70,
   accX:0,
   accY:0
 }


function drawPlayer() {
  if (map[68] == true) {
    if (player.accX < canvas.width/70) {
      player.accX += canvas.width/600;
    }
    if (player.accX > canvas.width/70) {
      player.accX = canvas.width/70
    }
  }
  if (map[32] == true || map[87] == true) {
    player.accY = -13;
  }
  player.y = player.y+player.gravity+player.accY;
  player.x = player.x+player.accX;
  ctx.fillStyle = "red";
  ctx.fillRect(player.x,player.y,player.width,player.height);
  ctx.stroke();
}



function checkCollition() {
  player.gravity = canvas.height/70;
  var crntY = Math.floor((player.y+player.height)/canvasTileY);
  var crntX = player.x/canvasTileX;
  if (level[crntY][crntX] == 1 || level[crntY][crntX+player.width == 1]) {
    player.gravity = 0;
    player.y = crntY*canvasTileY-player.height;
  }
}

function decreaseAcc() {
  if (player.accX > canvas.width/60) {
    player.accX -= canvas.width/60;
  }
  else {
    player.accX = 0;
  }
  if (player.accY > canvas.width/60) {
    player.accY -= canvas.width/60;
  }
  else {
    player.accY = 0;
  }
  player.gravity = canvas.height/70;
}

window.onkeydown = window.onkeyup = function(e){
  eventHandeler(e);
}
var map = {};
function eventHandeler(e) {
  /*
  W = 87
  A = 65
  S = 83
  D = 68
  SPACE = 32
  */
  map[e.keyCode] = e.type == 'keydown';
}


function update() {
  decreaseAcc();
  checkCollition();
  clearCanvas();
  drawTiles();
  drawPlayer();
  requestAnimationFrame(update);
}
update();
drawPlayer();
