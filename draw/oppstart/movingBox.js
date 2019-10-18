var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var x = 600;
var y = 300;

drawFigure();

function drawFigure() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  ctx.fillRect(x,y,50,50);
  checkCrash();
}
function buttonW() {
  y = y -20;
  drawFigure();
}
function buttonA() {
  x = x -20;
  drawFigure();
}
function buttonS() {
  y = y +20;
  drawFigure();
}
function buttonD() {
  x = x +20;
  drawFigure();
}
function buttonSpace() {
  y = y-60;
  drawFigure();
}

function checkKey(event) {
  var key = event.keyCode;
  if (key == 32) {
    buttonSpace();
  }
  if (key == 65) {
    buttonA();
  }
  if (key == 83) {
    buttonS()
  }
  if (key == 68) {
    buttonD()
  }
  if (key == 87) {
    buttonW();
  }else {

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
