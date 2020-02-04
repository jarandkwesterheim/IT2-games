function Player() {
  canvas = new Canvas;
  this.w = canvas.w/80;
  this.h = canvas.h/4;
  this.pos = createVector(this.w*4,(canvas.h-this.h)/2);
  this.acc = createVector(0,0);
  this.dir = 0;

  this.maxSpd = canvas.w/84;
  this.minSpd = 0;
  this.boost = canvas.w/1260;

  this.color = clr[2];


  this.setDir = function(w,s) {
    if (w == true) {w = -1}else {w = 0}

    if (s == true) {s = 1}else {s = 0}

    this.dir = s+w;
  }

  this.getPos = function() {


    this.acc.y += this.boost*this.dir;
    this.acc.y = constrain(this.acc.y,-this.maxSpd,this.maxSpd);

    if (this.dir == 0) {
      if (this.acc.y > this.boost) {this.acc.y -= this.boost;}
      else if (this.acc.y < -this.boost) {this.acc.y += this.boost;}
      else {this.acc.y = 0;}
    }

    this.pos.y += this.acc.y;
    this.pos.y = constrain(this.pos.y, 0,canvas.h-this.h)
  }
  this.update = function() {
    this.pos.y += ai.getPos(this.pos.y)+3*ball.dir;
    this.pos.y = constrain(this.pos.y, 0,canvas.h-this.h)
  }
  this.show = function() {
    fill(this.color);
    rect(this.pos.x,this.pos.y,-this.w,this.h);
  }
}
