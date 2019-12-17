function preload(){
  // put preload code here
}

var canvas,player,enemy,ball,menu,online,mode;
var clr = [255,'#007be1','rgb(255, 136, 13)','#8e17c6', 'rgb(43,43,43)'];
var keyList = {
  w:false,
  s:false,
  o:false,
  l:false,
  esc:false
}

function setup() {
  canvas = new Canvas;
  player = new Player;
  enemy = new Enemy;
  ball = new Ball;
  menu = new Menu;
  online = new Online;
  createCanvas(canvas.w,canvas.h);
  // put setup code here
  noStroke();
  textAlign(CENTER);
  mode = 'menu';
}

function keyPressed() {
  if (key == "w") {keyList.w = true}
  if (key == "s") {keyList.s = true}
  if (key == "o") {keyList.o = true}
  if (key == "l") {keyList.l = true}
  if (key == "Escape") {keyList.esc = true}
}
function keyReleased() {
  if (key == "w") {keyList.w = false}
  if (key == "s") {keyList.s = false}
  if (key == "o") {keyList.o = false}
  if (key == "l") {keyList.l = false}
  if (key == "Escape") {keyList.esc = false}
}

function draw() {
  clear();
  if (mode == 'singleplayer') {
    //trigger pause menu
    if (keyList.esc == true) {
      mode = 'pause';
      return;
    }
    //update functions
    player.setDir(keyList.w,keyList.s)
    player.getPos();

    enemy.setDir(keyList.o,keyList.l)
    enemy.getPos();

    ball.getPos();


    //check collition
    ball.testBall();
    // put drawing code here
    player.show();
    enemy.show();
    ball.show();
    ball.drawScore();
  }
  else if (mode == 'pause') {
    menu.update();
    menu.showPause();
  }
  else if (mode == 'chooseLobbies') {
    menu.update();
    menu.showLobbies();
  }
  else if (mode == 'lobby1') {
    if (keyList.esc == true) {
      mode = 'pause';
      online.subtractOnlinePlayers();
      return;
    }
    //get online and lan position
    if (playerId == 'player') {
      player.setDir(keyList.w,keyList.s)
      online.setPos('player')
      player.getPos();
      online.getPos('enemy')
      ball.getPos();

      ball.testBall();
      online.setPos('ball')
    }
    else if (playerId == 'enemy') {
      enemy.setDir(keyList.w,keyList.s)
      online.setPos('enemy')
      enemy.getPos();
      online.getPos('player');
      online.getPos('ball');
    }
    //check collition
    ball.testBall();
    // put drawing code here
    player.show();
    enemy.show();
    ball.show();
    ball.drawScore();
  }
  else if (mode == 'menu') {
    menu.update();
    menu.showMenu();
  }
}
