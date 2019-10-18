var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
//sirkelsentrum i x,y
var x = 150;
var y = 150;
var r = 100;

ctx.arc(x,y,r,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
