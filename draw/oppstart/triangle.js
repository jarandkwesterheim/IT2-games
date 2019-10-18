var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var onex = 500
var oney = 700
var twox = 700
var twoy = 700
var threex = 600
var threey = 550

ctx.lineWidth = 5;
ctx.moveTo(onex, oney);
ctx.lineTo(twox, twoy);
ctx.lineTo(threex, threey);
ctx.lineTo(onex, oney);
ctx.stroke();

var x1 = 400;
var y1 = 100;
var r1 = 20;

ctx.beginPath();
ctx.arc(x1,y1,r1,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

var x2 = 600;
var y2 = 100;


ctx.beginPath();
ctx.arc(x2,y2,r1,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();


ctx.moveTo(500,130);
ctx.lineTo(500,170);
ctx.stroke();


var x3 = 500;
var y3 = 230;
var r3 = 100;

ctx.beginPath();
ctx.arc(x3,y3,r3,0,Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
