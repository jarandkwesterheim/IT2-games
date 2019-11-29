var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var HEIGHT = canvas.height;
var WIDTH = canvas.width;
var objPad = 10;


//player object     player.x = 400
var player = {
  x:400,
  spdX:5,
  y:400,
  spdY:6,
  name:"G2",
}


//enemy objects and list
var enemyList = {};

Enemy("E3",700,200,3,-1);
Enemy("E2",300,500,-4,5);
Enemy("E1",500,400,-3,-2);

function Enemy(id,x,y,spdX,spdY) {
  var enemy = {
    x:x,
    spdX:spdX,
    y:y,
    spdY:spdY,
    name:"W",
    id:id,
  }
  enemyList[id] = enemy;
}



//interval requesting update to move objects    runs update() every 40ms;
//setInterval(update,40);           requestAnimationFrame() gjør det samme bare bedre


//smart way of coding 3 separate functions, enemy1, enemy2 and player. changes something with whatever
function updateEntity(something) {
  something.x += something.spdX;
  something.y += something.spdY;
  ctx.fillText(something.name, something.x, something.y);


  if (something.x < 0 || something.x > WIDTH -objPad) {
    something.spdX = -something.spdX
  }

  if (something.y < 0 +objPad || something.y > HEIGHT) {
    something.spdY = -something.spdY
  }
}


//calls for update entity, sends value for calling each object
function update() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  updateEntity(player);
  for (var key in enemyList){
    updateEntity(enemyList[key]);
  }
  requestAnimationFrame(update);
}
update();
