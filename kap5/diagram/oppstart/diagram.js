var temperaturer = [-4,0,2,3,4,0];
var dager = ['man','tir','ons','tor','fre','lør'];
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var xPos = 20;
var yPos = 150;
var bredde = 30;
var hoydeMul = 30;

canvas.style = 'border:2px solid black';
for (var i = 0; i < temperaturer.length; i++) {
  xPos = 20+2*bredde*i;
  var offset = 0;
  var temp = -temperaturer[i];
  var hoyde = temp*hoydeMul;
  if (temp>0) {
    ctx.fillStyle = "blue";
    offset = 20
  }
  else {
    ctx.fillStyle = "red";
  }
  ctx.fillRect(xPos,yPos,bredde,hoyde+0.1);
  ctx.fillStyle = "black";
  ctx.fillText(dager[i],xPos,yPos+10-offset);
}
