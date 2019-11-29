/*
W = 87
A = 65
S = 83
D = 68
SPACE = 32
*/
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var lastKey = 0;

var x = 600;
var y = 300;
var i = 0;

drawFigure();

function drawFigure() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  ctx.fillRect(x,y,50,50);
  checkCrash();
}
function delay() {
  setInterval(drawFigure(),250)
}

function checkKey(event) {
  var key = event.keyCode;
  lastKey = key;
  moveBox();
}

function moveBox() {
  while (lastKey == 87) {
    y = y-20;
    delay();
  }
}

function checkCrash() {
  if (y > 720-50) {
    y=300;
    x=600;
  }
  if (y < 0) {
    y=300;
    x=600;
  }
  if (x < 0) {
    x=600;
    y=300;
  }
  if (x > 1260-50) {
    x=600;
    y=300;
  } else {

  }
}
