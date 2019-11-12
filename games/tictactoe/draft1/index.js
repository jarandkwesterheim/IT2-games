
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
var waiting = "waiting";
var endscreen = "endscreen";
var status = idle;

var gamelobby = "";

//player
var playerid = "";
var playersymbol = "";

//tile array
var tileArr = [0,0,0,0,0,0,0,0,0];
var tileNum = 0;

//canvas sizing
var tnth = ((HEIGHT*0.8)/10);
var trd = ((HEIGHT*0.8)/3);
var fontsizeBig = ((HEIGHT*0.8)/8);
var fontsizeSmall = ((HEIGHT*0.8)/15);


//-----------------
//UPDATE ARR
//-----------------

turn1.on('value', snap => {
  turn = snap.val();
});

players1.on('value', snap => {
  players1Count = snap.val();
  if (status == "menu") {
    clearCanvas();
    drawMenu(snap.val());
  }
  else if (status == "waiting") {
    drawGame1();
  }
});




fblobby1.child(1).on('value', snap => {
  update(snap.val(),1);
})
fblobby1.child(2).on('value', snap => {
  update(snap.val(),2);
})
fblobby1.child(3).on('value', snap => {
  update(snap.val(),3);
})
fblobby1.child(4).on('value', snap => {
  update(snap.val(),4);
})
fblobby1.child(5).on('value', snap => {
  update(snap.val(),5);
})
fblobby1.child(6).on('value', snap => {
  update(snap.val(),6);
})
fblobby1.child(7).on('value', snap => {
  update(snap.val(),7);
})
fblobby1.child(8).on('value', snap => {
  update(snap.val(),8);
})
fblobby1.child(0).on('value', snap => {
  update(snap.val(),0);
})

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
    if (playerid == 1) {
      turn1.set(2);
    }
    else if (playerid == 2) {
      turn1.set(1);
    }
    return true;
  }
  else {
    return false;
  }
}
function updateTiles() {
  for (var i = 0; i < 9; i++) {
    var id = tileArr[i] ;
    var x = i%3+1;
    var y = Math.floor(i/3);
    drawTiles(x,y,id);
  }
}

function drawTiles(x,y,symbolid1) {
  if (status == "game") {
    if (symbolid1 == 1) {
      ctx.fillStyle = "black";
      ctx.moveTo((x*trd)-(0.1*trd), (y*trd)+(0.1*trd));
      ctx.lineTo((x*trd)-(0.9*trd), (y*trd)+(0.9*trd));
      ctx.moveTo((x*trd)-(0.9*trd), (y*trd)+(0.1*trd));
      ctx.lineTo((x*trd)-(0.1*trd), (y*trd)+(0.9*trd));
      ctx.stroke();
    }
    else if (symbolid1 == 2) {
      ctx.fillStyle = "black";
      ctx.moveTo((x*trd)-(0.5*trd)+(0.4*trd), (y*trd)+(0.5*trd));
      ctx.arc((x*trd)-(0.5*trd),(y*trd)+(0.5*trd),0.4*trd,0,2*Math.PI);
      ctx.stroke();
    }
    checkRules();
  }
}
function update(snap,valueArr) {
  tileArr[valueArr] = snap;
  var id = tileArr[valueArr] ;
  var x = valueArr%3+1;
  var y = Math.floor(valueArr/3);
  drawTiles(x,y,id);
  checkRules();
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
  else if (status == game) {
    gameClick(mousePosX,mousePosY);
  }
  else if (status == "endscreen") {
    window.history.go(0);
    console.log("reloading page");
  }
}

function menuClick(y) {
  if (y > (3*tnth) && y < (5*tnth)) {
    var i = players1Count;
    if (i >= 0 && i < 2) { //pressed lobby 1
      players1.set(i+1);
      resetTimeout();
      gamelobby = 1;
      if (players1Count == 1) {
        status = "waiting";
        checkRules();
      }
      else if (players1Count == 2) {
        playerid = players1Count;
        drawGame1();
      }
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
  var tile = (row*3)+column-1;
  if (turn == playerid) {
    if (prepTile(tile) == true) {
      fblobby1.child(tile).set(playerid);
    }
  }
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
  console.log("reseting firebase");
  clearCanvas();
  for (var i = 0; i < 9; i++) {
    db.child('tictactoe').child('lobbies').child('lobby'+lobbyid).child(i).set(0);
  }
  db.child('tictactoe').child('lobbies').child('lobby'+lobbyid).child('players').set(0);
  db.child('tictactoe').child('lobbies').child('lobby'+lobbyid).child('turn').set(1);
}

//setup menu
function drawMenu(num1) {
  status = menu;
  ctx.font = fontsizeBig+"px Arial";
  ctx.fillText("MENU", (3*tnth),(2*tnth));

  ctx.font = fontsizeSmall+"px Arial";
  ctx.fillText("Lobby 1  "+num1+"/2", (3*tnth),(4*tnth));
  tileArr = [0,0,0,0,0,0,0,0,0];
}




//setup game1
function drawGame1() {
  status = game;

  drawSquaresTrd();
  setupLogistics();
}
function setupLogistics() {
}



//------------
//RULES
function checkRules() {
  if (status == "game") {
    rulesGame();
  }
  else if (status == "endscreen") {
    setTimeout(drawEndScreen,1000);
  }
  else if (status == "waiting" && players1Count == 1) {
    playerid = 1;
    clearCanvas();
    ctx.font = fontsizeSmall+"px Arial";
    ctx.fillText(" WAITING FOR PLAYER 2", (1*tnth), (4*tnth));
  }
}

function rulesGame() {
  //chechking if player 1 won
  if (tileArr[0] == 1 && tileArr[1] == 1 && tileArr[2] == 1){ //first row
    status = endscreen;
    return tileArr[0];
  }
  else if (tileArr[3] == 1 && tileArr[4] == 1 && tileArr[5] == 1){ //second row
    status = endscreen;
    return tileArr[3];
  }
  else if (tileArr[6] == 1 && tileArr[7] == 1 && tileArr[8] == 1){ //third row
    status = endscreen;
    return tileArr[6];
  }
  else if (tileArr[0] == 1 && tileArr[3] == 1 && tileArr[6] == 1){ //first column
    status = endscreen;
    return tileArr[0];
  }
  else if (tileArr[1] == 1 && tileArr[4] == 1 && tileArr[7] == 1){ //second column
    status = endscreen;
    return tileArr[1];
  }
  else if (tileArr[2] == 1 && tileArr[5] == 1 && tileArr[8] == 1){ //third column
    status = endscreen;
    return tileArr[2];
  }
  else if (tileArr[0] == 1 && tileArr[4] == 1 && tileArr[8] == 1){ //first cross
    status = endscreen;
    return tileArr[0];
  }
  else if (tileArr[2] == 1 && tileArr[4] == 1 && tileArr[6] == 1){ //second cross
    status = endscreen;
    return tileArr[2];
  }
  //checking if player 2 won
  else if (tileArr[0] == 2 && tileArr[1] == 2 && tileArr[2] == 2){ //first row
    status = endscreen;
    return tileArr[0];
  }
  else if (tileArr[3] == 2 && tileArr[4] == 2 && tileArr[5] == 2){ //second row
    status = endscreen;
    return tileArr[3];
  }
  else if (tileArr[6] == 2 && tileArr[7] == 2 && tileArr[8] == 2){ //third row
    status = endscreen;
    return tileArr[6];
  }
  else if (tileArr[0] == 2 && tileArr[3] == 2 && tileArr[6] == 2){ // first column
    status = endscreen;
    return tileArr[0];
  }
  else if (tileArr[1] == 2 && tileArr[4] == 2 && tileArr[7] == 2){ //second column
    status = endscreen;
    return tileArr[1];
  }
  else if (tileArr[2] == 2 && tileArr[5] == 2 && tileArr[8] == 2){ //third column
    status = endscreen;
    return tileArr[2];
  }
  else if (tileArr[0] == 2 && tileArr[4] == 2 && tileArr[8] == 2){ //first cross
    status = endscreen;
    return tileArr[0];
  }
  else if (tileArr[2] == 2 && tileArr[4] == 2 && tileArr[6] == 2){ //second cross
    status = endscreen;
    return tileArr[2];
  }
  else {
    if (tileArr[0] !== 0 && tileArr[1] !== 0 && tileArr[2] !== 0 && tileArr[3] !== 0 && tileArr[4] !== 0 && tileArr[5] !== 0 && tileArr[6] !== 0 && tileArr[7] !== 0 && tileArr[8] !== 0) {
      status = endscreen;
      return 0;
    }
  }
}
function drawEndScreen() {
  clearCanvas();
  var w = rulesGame();
  ctx.font = fontsizeBig+"px Arial";
  if (w == 0) {
    ctx.font = fontsizeBig+"px Arial";
    ctx.fillText("DRAW", (3*tnth),(2*tnth));
    ctx.font = fontsizeSmall+"px Arial";
    ctx.fillText('click to restart', (3*tnth),(6*tnth));
  }
  else {
    if (w == playerid) {
      ctx.fillText('YOU WON', (2*tnth),(2*tnth));
    }
    else if (w !== playerid) {
      ctx.fillText('YOU LOST', (2*tnth),(2*tnth));
    }
    ctx.font = fontsizeSmall+"px Arial";
    ctx.fillText('WINNER IS "player '+w+'"', (2*tnth),(4*tnth));
    ctx.fillText('click to restart', (3*tnth),(6*tnth));
  }
}



//-----------------
//run by default
// var ruletimer = setInterval(checkRules,1000);

drawMenu(2);
resetFirebase(1);
