var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var radius = 200;
function draw() {
  for (var i = 1; i <=10; i++) {
    ctx.moveTo(250+radius,250);
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.stroke();
    radius = radius-20;
  }
}
