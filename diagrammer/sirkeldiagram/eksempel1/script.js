var chart = document.querySelector('#chart');
var ctx = chart.getContext('2d');

function graderTilRadianer(grader) {
  return Math.PI*grader /180;
}

var favoritter = [{farge:"PeachPuff",antall:12},{farge:"Peru",antall:9},{farge:"Salmon",antall:7}];
var sum = 0;
for(var favoritt of favoritter){
  sum += favoritt.antall;
}

var startvinkel = -90 //starter rett opp (-90 grader)
for(var favoritt of favoritter){
  var vinkel = favoritt.antall*360/sum; //hvor stor denne kakedelen skal være
  ctx.fillStyle = favoritt.farge;
  ctx.beginPath();
  ctx.moveTo(150,150); //til sentrum
  ctx.arc(150,150,140,graderTilRadianer(startvinkel),graderTilRadianer(startvinkel+vinkel)); //radius 140, tegner buen
  ctx.closePath();
  ctx.fill();
  startvinkel += vinkel;
}
