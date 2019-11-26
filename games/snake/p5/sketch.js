
  <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyCk90eY2a2qa1FZtuei_N-aKp-kEqXidrQ",
    authDomain: "chat-test-1f8d0.firebaseapp.com",
    databaseURL: "https://chat-test-1f8d0.firebaseio.com",
    projectId: "chat-test-1f8d0",
    storageBucket: "chat-test-1f8d0.appspot.com",
    messagingSenderId: "903842390094",
    appId: "1:903842390094:web:b4badd014978bc6a04631f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//firebase
const db = firebase.database().ref();
var box = db.child('movingboxhting');
var players = box.child('players');


function preload(){
  // put preload code here
}
let HEIGHT;
let WIDTH;
let side;
let block;
var level = [];


var id = 0;

let xPlayer;
let yPlayer;
var xAcc = 0;
var yAcc = 0;

let xSnacc;
let ySnacc;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  HEIGHT = height;
  WIDTH = width;
  if (height >= width) {
    side = width*0.8;
  }
  else {
    side = height*0.8;
  }
  block = side/20;
  //level
  for (var i = 0; i < 19; i++) {
    level.push(level[i] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  }
  //player randomize
  xPlayer = (WIDTH-side)/2+Math.floor(Math.random()*20)*block;
  yPlayer = (HEIGHT-side)/2+Math.floor(Math.random()*20)*block;
  xSnacc = (WIDTH-side)/2+(Math.floor(Math.random()*20)*block);
  ySnacc = (HEIGHT-side)/2+(Math.floor(Math.random()*20)*block);
}

function keyPressed() {
  if (keyCode === UP_ARROW && yAcc !== 1*block) {
    xAcc = 0;
    yAcc = -1/6;
  }
  else if (keyCode === DOWN_ARROW && yAcc !== -1*block) {
    xAcc = 0;
    yAcc = 1/6;
  }
  else if (keyCode === LEFT_ARROW && xAcc !== 1*block) {
    xAcc = -1/6;
    yAcc = 0;
  }
  else if (keyCode === RIGHT_ARROW && xAcc !== -1*block) {
    xAcc = 1/6;
    yAcc = 0;
  }
  else {
    yAcc = 0;
    xAcc = 0;
  }


  xAcc = xAcc*block;
  yAcc = yAcc*block;
}


function drawLevel() {
  var xStart = (WIDTH-side)/2;
  var yStart = (HEIGHT-side)/2;

  stroke('black');
  rect(xStart,yStart,side,side);
  stroke('rgb(171, 168, 168)');
  for(var i = 1; i < 20; i++){
    line(xStart+i*block,yStart,xStart+i*block,yStart+side);
    line(xStart,yStart+i*block,xStart+side,yStart+i*block);
  }
}
function drawPlayer() {
  //update player position
  xPlayer += xAcc;
  yPlayer += yAcc;

  //draw player in canvas
  fill('black');
  rect(xPlayer,yPlayer,block,block);
  noFill();
}
function genSnacc() {
  xSnacc = (WIDTH-side)/2+(Math.floor(Math.random()*20)*block);
  ySnacc = (HEIGHT-side)/2+(Math.floor(Math.random()*20)*block);
}
function drawSnacc() {
  fill('red');
  circle(xSnacc+block/2,ySnacc+block/2,block/2);
  noFill();
}
function watchSnacc() {
  if (Math.round((ySnacc+0.5*block)/block) == Math.round((yPlayer+0.5*block)/block) && Math.round((xSnacc+0.5*block)/block) == Math.round((xPlayer+0.5*block)/block)) {
    genSnacc();
  }
}
function watchPlayer() {
  if (xPlayer < (WIDTH-side)/2 || xPlayer+block > (WIDTH-side)/2+side || yPlayer < ((HEIGHT-side)/2) || yPlayer+block > (HEIGHT-side)/2+side) {
    yAcc = 0;
    xAcc = 0;
  }
}

function draw() {
  // put drawing code here
  clear();
  drawLevel();
  watchPlayer();
  drawSnacc();
  drawPlayer();
  watchSnacc();
}
