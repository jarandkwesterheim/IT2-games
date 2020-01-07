function AI() {
  let canvas, player, ball, enemy, menu;
  canvas = new Canvas;
  player = new Player;
  enemy = new Enemy;
  ball = new Ball;
  menu = new Menu;


  this.getPos = function() {
    enemy.acc.y = (ball.pos.y-enemy.pos.y);
  }
}
