function Ball() {
  canvas = new Canvas;
  player = new Player;
  enemy = new Enemy;
  var side,player1Score,player2Score;
  var ballstatus = 'ready';
  var timer = 0;
  this.player1Score = 0;
  this.player2Score = 0;

  this.d = canvas.w/23;
  this.r = this.d/2;

  this.pos = createVector(canvas.w/2,canvas.h/2);
  this.acc = createVector(0,0);
  this.dir = 0;

  this.colour = clr[3];


  this.maxSpd = canvas.w/84;
  this.minSpd = 0;
  this.boost = canvas.w/1260;

  this.resetGame = function() {
    timer = -100;
    player.pos.y = canvas.h/2-player.h/2;
    enemy.pos.y = canvas.h/2-enemy.h/2;
    this.player1Score = 0;
    this.player2Score = 0;
  }

  this.addScore = function() {
    if (side == 2) {
      this.player1Score += 1;
      if (this.player1Score > 4) {this.resetGame()}
    }
    else if (side == 1) {
      this.player2Score += 1;
      if (this.player2Score > 4) {this.resetGame()}
    }
  }
  this.drawScore = function() {
    var halfway = canvas.w/2;
    var y = canvas.w/18;
    textSize(canvas.w/18);
    text(this.player1Score,halfway-canvas.w/18,y);
    text(this.player2Score,halfway+canvas.w/63,y);
  }


  this.testBall = function() {
    if (ballstatus == 'dead') {
      var halfwayX = canvas.w/2;
      var halfwayY = canvas.h/2;
      var resetSpeedX = halfwayX-this.pos.x;
      var resetSpeedY = halfwayY-this.pos.y;

      this.acc.x = resetSpeedX/10;
      this.acc.y = resetSpeedY/10;
      if (abs(this.acc.x) < 0.01 && abs(this.acc.y) < 0.01) {
        ballstatus = 'ready';
        this.acc.x = 0;
        this.pos.x = halfwayX;

        this.acc.y = 0;
        this.pos.y = halfwayY;
        timer = 0;
      }
    }
    if (ballstatus == 'alive') {
      //test if colliding with top or bottom
      if (this.pos.y <= 0+this.r || this.pos.y >= canvas.h-this.r) {
        this.acc.y = -this.acc.y;
      }
      if (this.pos.x <= 0+this.r || this.pos.x >= canvas.w-this.r) {
        this.acc.x = 0;
        this.acc.y = 0;
        this.addScore();
        ballstatus = 'dead';
      }

      //test collition with bars
      //test which side
      var xOverlap,yOverlap, vecDisOverlap;
      if (this.pos.x > canvas.w/2) {
        if (side !== 2) {
          side = 2;
        }
      }
      if (this.pos.x < canvas.w/2) {
        if (side !== 1) {
          side = 1;
        }
      }


      //test 1st half
      if (side == 1) {
        if (this.pos.x-this.r < player.pos.x) {xOverlap = true;} else {xOverlap = false}
        if (this.pos.y > player.pos.y && this.pos.y < player.pos.y+enemy.h) {yOverlap = true;} else {yOverlap = false}

        //calculate vector length
        var xDist = Math.abs(this.pos.x - player.pos.x);

        var yDist1 = Math.abs(this.pos.y - player.pos.y);
        var ballMag1 = sqrt(xDist*xDist + yDist*yDist);

        var yDist2 = Math.abs(this.pos.y - player.pos.y+player.h);
        var ballMag2 = sqrt(xDist*xDist + yDist2*yDist2);
        if (ballMag1 < this.r || ballMag2 < this.r) {
          vecDisOverlap == true;
        }
        //change speed
        if (xOverlap == true && yOverlap == true || vecDisOverlap == true) {
          this.acc.x = -this.acc.x+this.boost;
          this.acc.y -= this.newDir(player);
        }
      }
      //test 2nd half
      if (side == 2) {
        if (this.pos.x+this.r > enemy.pos.x) {xOverlap = true;}else {xOverlap = false}
        if (this.pos.y > enemy.pos.y && this.pos.y < enemy.pos.y+enemy.h) {yOverlap = true}else {yOverlap = false}

        //calculate vector length
        var xDist = Math.abs(this.pos.x - player.pos.x);
        var yDist = Math.abs(this.pos.y - player.pos.y);
        var ballMag = sqrt(xDist*xDist + yDist*yDist);
        if (ballMag < this.d) {
          vecDisOverlap == true;
        }
        //change speed
        if (xOverlap == true && yOverlap == true || vecDisOverlap == true) {
          this.acc.x = -this.acc.x-this.boost;
          this.acc.y -= this.newDir(enemy);
        }
      }
    }
    if (ballstatus == 'ready') {
      timer++;
      var multiplier = 0;
      if (timer > 120) {
        ballstatus = 'alive';
        if (side == 1) {
          multiplier = 1;
        }
        else {
          multiplier = -1;
        }
        this.acc.x = 7*multiplier;

        this.acc.y = 0;
      }
    }
  }
  this.newDir = function(bar) {
    var halfway = bar.pos.y+(bar.h/2);
    var dist = (halfway-ball.pos.y)/20;
    return dist;
  }

  this.getPos = function() {


    this.acc.x = constrain(this.acc.x,-this.maxSpd,this.maxSpd);
    this.acc.x = constrain(this.acc.x,-this.maxSpd,this.maxSpd)

    this.pos.x += this.acc.x;
    this.pos.y += this.acc.y;

    this.pos.x = constrain(this.pos.x,0+this.r,canvas.w-this.r);
    this.pos.y = constrain(this.pos.y,0+this.r,canvas.h-this.r);
  }

  this.show = function() {
    fill(this.colour);
    ellipse(this.pos.x,this.pos.y,this.d,this.d);
  }
}
