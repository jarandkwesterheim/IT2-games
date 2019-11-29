
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
var dbxplayer = box.child('xplayer');
var dbyplayer = box.child('yplayer');
var dbxBall = box.child('xBall');
var dbyBall = box.child('yBall');

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

let xBall;
let yBall;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
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
  xBall = (WIDTH-side)/2+(Math.floor(Math.random()*20)*block);
  yBall = (HEIGHT-side)/2+(Math.floor(Math.random()*20)*block);
}


function checkKey() {
  if(keyIsDown(RIGHT_ARROW)) {
    yPlayer += -(1/2.5)*block;
  }
  if(keyIsDown(LEFT_ARROW)) {
    yPlayer = (1/2.5)*block;
  }
}

function drawLevel() {
  var xStart = (WIDTH-side)/2;
  var yStart = (HEIGHT-side*1.2)/2;

  rect(xStart,yStart,side,side);
}
function drawPlayer() {
  //update player position
  xPlayer += xAcc;
  yPlayer += yAcc;

  //draw player in canvas
  fill('black');
  rect(xPlayer,yPlayer,block,3*block);
  noFill();
}
function genBall() {
  xBall = (WIDTH-side)/2+(Math.floor(Math.random()*20)*block);
  yBall = (HEIGHT-side)/2+(Math.floor(Math.random()*20)*block);
}
function watchPlayer() {
  if (xPlayer < (WIDTH-side)/2 || xPlayer+block > (WIDTH-side)/2+side || yPlayer < ((HEIGHT-side)/2) || yPlayer+block > (HEIGHT-side)/2+side) {
    yAcc = 0;
    xAcc = 0;
  }
}
function updateDatabase() {
  dbxplayer.set(xPlayer);
  dbyplayer.set(yPlayer);
  dbxBall.set(xBall);
  dbyBall.set(yBall);
}

function draw() {
  // put drawing code here
  checkKey();
  clear();
  drawLevel();
  drawPlayer();
  updateDatabase();
}
