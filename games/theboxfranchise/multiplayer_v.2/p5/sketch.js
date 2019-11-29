function startServer() {

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
}
startServer();
//firebase
const db = firebase.database().ref();
const lobby1 = db.child('multiplayerV2').child('lobby1');
const playercount = lobby1.child('playercount');
const globalstatus = lobby1.child('globalstatus');
const dbplayer1 = lobby1.child('player1');
  const dbplayer1x = dbplayer1.child('x');
  const dbplayer1y = dbplayer1.child('y');
  const dbplayer1r = dbplayer1.child('r');
const dbplayer2 = lobby1.child('player2');
  const dbplayer2x = dbplayer2.child('x');
  const dbplayer2y = dbplayer2.child('y');
  const dbplayer2r = dbplayer2.child('r');


//global constants
let HEIGHT;
let WIDTH;


function preload(){
  // put preload code here
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  noStroke();
  // put setup code here
}
//global variables

var status = 'menu';
var globalstatusLocal = 'menu';
var playercountLocal = 0;

var p1 = {
  x:10,
  y:50,
  spdX:0,
  spdY:0,
  r:70,
  color:'black'
}
var p2 = {
  x:90,
  y:50,
  spdX:0,
  spdY:0,
  r:70,
  color:'red'
}

let id;

var keyList = {
  w:false,
  a:false,
  s:false,
  d:false,
  space:false
};



//functions
function keyPressed() {
  if (status == 'game') {
    if (keyCode == 87) {
      keyList.w = true;
    }
    if (keyCode == 65) {
      keyList.a = true;
    }
    if (keyCode == 83) {
      keyList.s = true;
    }
    if (keyCode == 68) {
      keyList.d = true;
    }
    if (keyCode == 32) {
      keyList.space = true;
    }
  }
  else if (status == 'menu') {
    if (keyCode == 13) {
      menuInteracted();
    }
  }
}
function keyReleased() {
  if (keyCode == 87) {
    keyList.w = false;
  }
  if (keyCode == 65) {
    keyList.a = false;
  }
  if (keyCode == 83) {
    keyList.s = false;
  }
  if (keyCode == 68) {
    keyList.d = false
  }
  if (keyCode == 32) {
    keyList.space = false;
  }
}


function testCollision() {
  //tests Collision with canvas border
  var radius = id.r/2;
  if (radius > (id.x*width/100)) {//crash left side of canvas
    id.x = radius/width*100;
    id.spdX = -id.spdX/3;
  }
  if (width-radius < (id.x*width/100)) {
    id.x = (width-radius)/width*100;
    id.spdX = -id.spdX/3;
  }
  if (radius > (id.y*height/100)) {
    id.y = radius/height*100;
    id.spdY = -id.spdY/3;
  }
  if (height-radius < (id.y*height/100)) {
    id.y = (height-radius)/height*100;
    id.spdY = -id.spdY/3;
  }


  //tests collision with other balls
  var difX = p1.x-p2.x;
  var difY = p1.y-p2.y;
  var collectiveSpdX = p1.spdX + p2.spdX;
  var collectiveSpdY = p1.spdY + p2.spdY;
  var difCenter = sqrt(difX^2+difY^2);
  if (difCenter < (p1.r/2+p2.r/2)/width*100) {
    console.log('crash');
    console.log('dif x is: '+difX);
    console.log('dif y is: '+difY);
    console.log('dif center is: '+difCenter);
    console.log('radius is: '+(p1.r/2+p2.r/2)/width*100);
  }
}


function updatePlayers() {
  var accPlayerX = 0.015;
  var accPlayerY = 0.035;

  //if D is pressed
  if (keyList.d == true) {
    id.spdX += accPlayerX;
  }

  //if S i pressed
  if (keyList.s == true) {
    id.spdY += accPlayerY;
  }

  //if W i pressed
  if (keyList.w == true) {
    id.spdY -= accPlayerY;
  }

  //if A is pressed
  if (keyList.a == true) {
    id.spdX -= accPlayerX;
  }

  var maxSpdPlayerX = 0.8;
  var maxSpdPlayerY = 1.86;
  if (id.spdX > maxSpdPlayerX) {
    id.spdX = maxSpdPlayerX;
  }
  if (id.spdX < -maxSpdPlayerX) {
    id.spdX = -maxSpdPlayerX;
  }
  if (id.spdY > maxSpdPlayerY) {
    id.spdY = maxSpdPlayerY;
  }
  if (id.spdY < -maxSpdPlayerY) {
    id.spdY = -maxSpdPlayerY;
  }


  //decrease speeds
  decreaseSpeeds();

  //move your player
  id.x += id.spdX;
  id.y += id.spdY;

  //moves enemy player
}
function decreaseSpeeds() {
  var decreaseAmountX = 0.01;
  var decreaseAmountY = 0.023;
  //spd X
  if (id.spdX > decreaseAmountX && keyList.d == false) {
    id.spdX -= decreaseAmountX;
  }
  else if (id.spdX < -decreaseAmountX && keyList.a == false) {
    id.spdX += decreaseAmountX;
  }
  else if (keyList.d == false && keyList.a == false && id.spdX < decreaseAmountX && id.spdX > -decreaseAmountX) {
    id.spdX = 0;
  }

  //spd YX
  if (id.spdY > decreaseAmountY && keyList.s == false) {
    id.spdY -= decreaseAmountY;
  }
  else if (id.spdY < -decreaseAmountY && keyList.w == false) {
    id.spdY += decreaseAmountY;
  }
  else if (keyList.s == false && keyList.w == false && id.spdY < decreaseAmountY && id.spdY > -decreaseAmountY) {
    id.spdY = 0;
  }
}

function drawPlayer(player) {
  var xPos = player.x*width/100;
  var yPos = player.y*height/100;
  var raduis = player.r;
  fill(player.color);
  circle(xPos,yPos,raduis);
}
function drawMenu() {
  textSize(width/30);
  text('make sure both players are loaded in to the site', 20,height/2-25);
  text('player1 presses ENTER first, then player 2 presses ENTER', 20, height/2+25)
}
function menuInteracted() {
  if (globalstatusLocal == 'menu') {
    status = 'waiting';
    globalstatus.set('waiting');
    playercount.set(1);
    id = p1;
  }
  else if (globalstatusLocal == 'waiting'){
    status = 'game';
    globalstatus.set('game');
    playercount.set(2);
    id = p2;
  }
}

//firebase eventlisteners
function resetFirebase(code) {
  if (code == 9098) {
    globalstatus.set('menu');
    playercount.set(0);
    dbplayer1x.set(0);
    dbplayer1y.set(50);
    dbplayer1r.set(70);

    dbplayer2x.set(90);
    dbplayer2y.set(50);
    dbplayer2r.set(70);

    console.log('reset');
    window.location.reload(true);
  }
}

globalstatus.on('value', snap => {
  globalstatusLocal = snap.val();
} );
playercount.on('value', snap => {
  playercountLocal = snap.val();
  if (playercountLocal == 2 && status == 'waiting') {
    status ='game';
  }//makes sure player 1 loads into the game
  if (playercountLocal == 2 && status == 'menu') {
    status = 'spec';
  }//makes sure nobody interacts
} );

//updates local numbers of players

//x values
dbplayer1x.on('value', snap => {
  if (id !== p1) {
    p1.x = snap.val();
  }
})
dbplayer2x.on('value', snap => {
  if (id !== p2) {
    p2.x = snap.val();
  }
})

//y values
dbplayer1y.on('value', snap => {
  if (id !== p1) {
    p1.y = snap.val();
  }
})
dbplayer2y.on('value', snap => {
  if (id !== p2) {
    p2.y = snap.val();
  }
})

//r values
dbplayer1r.on('value', snap => {
  if (id !== p1) {
    p1.r = snap.val();
  }
})
dbplayer2r.on('value', snap => {
  if (id !== p2) {
    p2.r = snap.val();
  }
})


function pushPos() {
  if (id == p1) {
    dbplayer1x.set(p1.x);
    dbplayer1y.set(p1.y);
    dbplayer1r.set(p1.r);
  }
  if (id == p2) {
    dbplayer2x.set(p2.x);
    dbplayer2y.set(p2.y);
    dbplayer2r.set(p2.r);
  }
}


function draw() {
  clear();
  // put drawing code here
  if (status == 'game') {
    pushPos();
    testCollision();
    updatePlayers();
    drawPlayer(p1);
    drawPlayer(p2);
  }
  else if (status == 'menu'){
    drawMenu();
  }
  else if(status == 'spec') {
    id = 0;
    drawPlayer(p1);
    drawPlayer(p2);
  }
}
