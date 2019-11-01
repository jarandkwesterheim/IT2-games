var HEIGHT = window.innerHeight;
var WIDTH = window.innerWidth;
document.body.height = HEIGHT;
document.body.width = WIDTH;

//canvas
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
if (HEIGHT<WIDTH) {
  var size = HEIGHT*0.8;
  canvas.height = size;
  canvas.width = size;
}
else {
  var size = WIDT*0.8;
  canvas.height = size;
  canvas.width = size;
}

//GLOBAL VARIABLES



//GENERAL FUNCTIONS



//run by default
drawMenu();
