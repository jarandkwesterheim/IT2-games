var regFarge = document.querySelector('#regFarge');
var inpFarge = document.querySelector('#inpFarge');
var inpAntall = document.querySelector('#inpAntall');
var chart = document.querySelector('#chart');
var ctx = chart.getContext('2d');

function graderTilRadianer(grader) {
  return Math.PI*grader/180;
}
var favoritter =[];
function finnSum() {
  var sum = 0;
  for(var favoritt of favoritter){
    sum += favoritt.antall;
  }
  return sum;
}

function tegnKake() {
  var sum = finnSum();
  var startvinkel = -90;
  ctx.clearRect(0,0,300,300);
  for(var favoritt of favoritter){
    var vinkel = favoritt.antall*360/sum;
    ctx.fillStyle = favoritt.farge;
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.arc(150,150,140,graderTilRadianer(startvinkel),graderTilRadianer(startvinkel+vinkel));
    ctx.closePath();
    ctx.fill();
    startvinkel += vinkel;
  }
}

regFarge.onsubmit = function(evt){
  evt.preventDefault();
  var nyFarge = inpFarge.value;
  var nyttAntall = Number(inpAntall.value);
  favoritter.push({farge: nyFarge,antall: nyttAntall});
  inpFarge.value = "";
  inpAntall.value = "";
  inpFarge.focus();
  tegnKake();
}
