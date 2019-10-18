var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var side = 300;
var xPos = 0;
var yPos = 0;

while (side>0) {
  ctx.rect(xPos,yPos,side,side);
  ctx.stroke();
  var i = Math.floor(Math.random()*15)+5;
  side = side-i;
  xPos = xPos + (0.5*i);
  yPos = yPos + (0.5*i);
}
