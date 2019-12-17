function Menu() {
  let canvas, ball, online;
  canvas = new Canvas;
  ball = new Ball;
  online = new Online;

  var clientY = 0;


  let menuText1, menuText2, menuText3, menuText4;


  var bars = {
    pos:createVector(canvas.w/100,canvas.h/100),
    w:canvas.w/80,
    h:canvas.h/1.02
  };
  var cursor = {
    x:bars.pos.x-(bars.pos.x-canvas.w/60/2),
    w:canvas.w/60,
    h:canvas.h/10
  }

  var canvasPos = {
    center:canvas.w/2,
    fourth: canvas.h/4
  }

  document.body.onmousemove = function(e) {
    var canvasMargin = (window.innerHeight-canvas.h)/2+canvas.h/20;
    clientY = e.clientY-canvasMargin;
    clientY = constrain(clientY,0,canvas.h-(canvas.h/10));
  }
  document.body.onclick = function() {

    //menu button clikced
    if (menuText2 == clr[0] && mode == 'menu') {mode = 'singleplayer';}
    if (menuText3 == clr[0] && mode == 'menu') {mode = 'chooseLobbies';}



    //lobby button clicked
    if (menuText1 == clr[0] && mode == 'chooseLobbies') {mode = 'lobby1'; online.setId();}
    if (menuText2 == clr[0] && mode == 'chooseLobbies') {}
    if (menuText3 == clr[0] && mode == 'chooseLobbies') {}
    if (menuText4 == clr[0] && mode == 'chooseLobbies') {mode = 'menu'}


    //if pause clicked
    if (menuText1 == clr[0] && mode == 'pause') {mode = 'singleplayer'}
    if (menuText3 == clr[0] && mode == 'pause') {window.location.reload(true)}


  }
  this.update = function() {
    //reset variables
    menuText1 = clr[2];
    menuText2 = clr[2];
    menuText3 = clr[2];
    menuText4 = clr[2];
    //draw sidebars
    fill(clr[1])
    rect(bars.pos.x,bars.pos.y,bars.w,bars.h);
    rect(canvas.w-bars.pos.x,bars.pos.y,-bars.w,bars.h);

    //draw cursors
    fill(clr[2])
    rect(cursor.x,clientY,cursor.w,cursor.h);
    rect(canvas.w-cursor.x,clientY,-cursor.w,cursor.h);


    //get hover pos

    if (clientY > 0*canvasPos.fourth && clientY < 1*canvasPos.fourth && mode !== 'menu') {
      menuText1 = clr[0];
    }
    if (clientY > 1*canvasPos.fourth && clientY < 2*canvasPos.fourth) {
      menuText2 = clr[0];
    }
    if (clientY > 2*canvasPos.fourth && clientY < 3*canvasPos.fourth) {
      menuText3 = clr[0]
    }
    if (clientY > 3*canvasPos.fourth && clientY < 4*canvasPos.fourth) {
      menuText4 = clr[0]
    }

  }
  this.showMenu = function() {
    //draw Menu
    textSize(canvas.w/12);
    fill(menuText1)
    text('PONG',canvasPos.center,canvasPos.fourth);
    textSize(canvas.w/17);
    fill(menuText2)
    text('SINGLEPLAYER',canvasPos.center,2*canvasPos.fourth);
    fill(menuText3)
    text('MULTIPLAYER',canvasPos.center,3*canvasPos.fourth);
  }

  this.showPause = function() {
    //draw Menu
    textSize(canvas.w/17);
    fill(menuText1)
    text('RESUME',canvasPos.center,1*canvasPos.fourth);
    fill(menuText3)
    text('EXIT GAME',canvasPos.center,3*canvasPos.fourth);
  }



  this.showLobbies = function() {
    //draw Lobbies
    textSize(canvas.w/17);
    fill(menuText1)
    text('Lobby 1',canvasPos.center,canvasPos.fourth);
    fill(menuText2)
    text('Lobby 2',canvasPos.center,2*canvasPos.fourth);
    fill(menuText3)
    text('Lobby 3',canvasPos.center,3*canvasPos.fourth);
    textSize(canvas.w/23)
    fill(menuText4)
    text('BACK',canvasPos.center,3.7*canvasPos.fourth);
  }
}
