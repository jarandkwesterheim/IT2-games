
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
var fblobby1 = db.child('tictactoe').child('lobbies').child('lobby1');
var fblobby2 = db.child('tictactoe').child('lobbies').child('lobby2');
var fblobby3 = db.child('tictactoe').child('lobbies').child('lobby3');
var turn1 = fblobby1.child('turn');
var players1 = fblobby1.child('players');
var players2 = fblobby2.child('players');
var players3 = fblobby3.child('players');
var players1Count = 0;
var players2Count = 0;
var players3Count = 0;
var turn = 0;




turn1.on('value', snap => {
  turn = snap.val();
  updateTiles();
})

players1.on('value', snap => {
  players1Count = snap.val();
  if (players1Count !== 2) {
    clearCanvas();
    drawMenu(snap.val());
    resetFirebase();
  }
});




//window sizing
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
  var canvasN = (HEIGHT*0.1);
}
else {
  var size = WIDTH*0.8;
  canvas.height = size;
  canvas.width = size;
  var canvasN = (WIDTH*0.1);
}



//-----------------
//GLOBAL VARIABLES
//-----------------
var idle = "idle";
var menu = "menu";
var game = "game";
var status = idle;

var gamelobby = "";

//player
var playerid = "";
var playersymbol = "";

//tile array
var tileArr = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
var tileNum = 0;

//canvas sizing
var tnth = ((HEIGHT*0.8)/10);
var trd = ((HEIGHT*0.8)/3);
var fontsizeBig = ((HEIGHT*0.8)/8);
var fontsizeSmall = ((HEIGHT*0.8)/15);


//-----------------
//GENERAL FUNCTIONS
//-----------------
function clearCanvas() {
  ctx.clearRect(0,0,10*tnth,10*tnth);
}
function resetTimeout() {
  clearTimeout(clearPlayercountVar);
  clearPlayercountVar = setTimeout(clearPlayercount, 150000);
}
var clearPlayercountVar = setTimeout(clearPlayercount, 150000);
function clearPlayercount(){
  players1.set(0);
}
function prepTile(tile) {
  //check if tile is painted
  if (tileArr[tile] == "") {
    fblobby1.child(tile).set(playerid);
    var newplayerid = 1;
    if (playerid == 1) {
      newplayerid = 2;
    }
    turn1.set(newplayerid);
  }
}
function updateTiles() {
  console.log("updateTiles");
}

function drawTiles(x,y,symbolid) {
  console.log(x,y);
  if (symbolid == 1) {
    ctx.fillStyle = "black";
    ctx.moveTo((x*trd)-(0.1*trd), (y*trd)+(0.1*trd));
    ctx.lineTo((x*trd)-(0.9*trd), (y*trd)+(0.9*trd));
    ctx.moveTo((x*trd)-(0.9*trd), (y*trd)+(0.1*trd));
    ctx.lineTo((x*trd)-(0.1*trd), (y*trd)+(0.9*trd));
    ctx.stroke();
  }
  else if (symbolid == 2) {
    ctx.fillStyle = "black";
    ctx.moveTo((x*trd)-(0.5*trd)+(0.4*trd), (y*trd)+(0.5*trd));
    ctx.arc((x*trd)-(0.5*trd),(y*trd)+(0.5*trd),0.4*trd,0,2*Math.PI);
    ctx.stroke();
  }
}
function getValueTile() {
  fblobby1.child('turn').on('value', snap => {
    for (var i = 1; i <= 9; i++) {
      fblobby1.child(i).on('value', snap => {
        update(snap.val());
      })
    }
  })
}
function update(snap) {
  tileNum++;
  tileArr[tileNum] = snap;
}


//registrer click on canvas
canvas.onclick = function(evt) {
  //canvas cursor position
  var mousePosX = (evt.clientX-(WIDTH/2-(HEIGHT*0.4)));
  var mousePosY = (evt.clientY-canvasN);

  if (status == menu) { //in menu
    //is click on canvas
    if (mousePosX > 0 && mousePosX < (10*tnth)) {
      menuClick(mousePosY);
    }
  }
  else if (status == game && turn == playerid) {
    gameClick(mousePosX,mousePosY);
  }
}

function menuClick(y) {
  if (y > (3*tnth) && y < (5*tnth)) {
    var i = players1Count;
    if (i >= 0 && i < 2) { //pressed lobby 1
      players1.set(i+1);
      resetTimeout();
      gamelobby = 1;
      drawGame1();
    }
  }
  else if (y > (5*tnth) && y < (7*tnth)) {
    var i = players2Count;
  }
  else if (y > (7*tnth) && y < (9*tnth)) {
    var i = players3Count;
  }
}

function gameClick(x,y) {
  var column = "";
  var row = "";
  //check column
  if (x < (trd)) {
    column = 1;
  }
  else if (x < (2*trd)) {
    column = 2;
  }
  else if (x < (3*trd)) {
    column = 3;
  }

  //check row
  if (y < trd) {
    row = 0;
  }
  else if (y < (2*trd)) {
    row = 1;
  }
  else if(y < (3*trd)) {
    row = 2;
  }


  var symbolid = playerid;
  //calculate tile
  var tile = (row*3)+column;
  getValueTile();
  prepTile(tile);
  drawTiles(column,row,symbolid);
}

//setup squares
function drawSquaresTnth() {
  clearCanvas();
  var x = tnth;
  var y = tnth;
  for (var i = 0; i < 10; i++) {

    ctx.fillStyle = "black";
    ctx.moveTo(x,0);
    ctx.lineTo(x,(10*tnth));
    ctx.stroke();
    x += tnth;
  }
  for (var i = 0; i < 10; i++) {

    ctx.fillStyle = "black";
    ctx.moveTo(0,y);
    ctx.lineTo((10*tnth),y);
    ctx.stroke();
    y += tnth;
  }
}
function drawSquaresTrd() {
  clearCanvas();
  var x = trd;
  var y = trd;
  for (var i = 0; i < 10; i++) {

    ctx.fillStyle = "black";
    ctx.moveTo(x,0);
    ctx.lineTo(x,(3*trd));
    ctx.stroke();
    x += trd;
  }
  for (var i = 0; i < 10; i++) {

    ctx.fillStyle = "black";
    ctx.moveTo(0,y);
    ctx.lineTo((3*trd),y);
    ctx.stroke();
    y += trd;
  }
}

//reset firebase
function resetFirebase(lobbyid) {
  for (var i = 0; i < 10; i++) {
    db.child('tictactoe').child('lobbies').child('lobby'+lobbyid).child(i).set("");
  }
}

//setup menu
function drawMenu(num1,num2,num3) {
  status = menu;
  ctx.font = fontsizeBig+"px Arial";
  ctx.fillText("MENU", (3*tnth),(2*tnth));

  ctx.font = fontsizeSmall+"px Arial";
  ctx.fillText("Lobby 1  "+num1+"/2", (3*tnth),(4*tnth));
  ctx.fillText("Lobby 2  "+num2+"/2", (3*tnth),(6*tnth));
  ctx.fillText("Lobby 3  "+num3+"/2", (3*tnth),(8*tnth));
}




//setup game1
function drawGame1() {
  status = game;

  drawSquaresTrd();
  setupLogistics();
  drawTiles();
}
function setupLogistics() {
  if (players1Count == 1) {
    playerid = 1;
    playersymbol = "cross";
  }
  else if (players1Count == 2) {
    playerid = 2;
    playersymbol == "circle";
  }
}


//-----------------
//run by default
