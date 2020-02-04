function Ai() {
  let canvas, player, ball, enemy, menu;
  canvas = new Canvas;
  player = new Player;
  enemy = new Enemy;
  ball = new Ball;

  let enemyNewAcc, difficulty,maxSpdAi;


  this.setDifficulty = function(e) {
    difficulty = e;
    console.log('current difficulty: '+10-difficulty);
    maxSpdAi = maxSpdAi/difficulty;
  }
  this.getPos = function(enemyposy) {
    enemyNewAcc = ((this.ballposy-enemyposy)-enemy.h/2);
    if (enemyNewAcc > enemy.maxSpd/2) {
      enemyNewAcc = enemy.maxSpd/2;
    }
    else if (enemyNewAcc < -enemy.maxSpd/2) {
      enemyNewAcc = -enemy.maxSpd/2;
    }
    return enemyNewAcc;
  }
}
