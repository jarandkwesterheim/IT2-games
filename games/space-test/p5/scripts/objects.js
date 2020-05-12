function Objects() {

  // OBJECTS
  this.sun = {
    pos:createVector(canvas.width/2,canvas.height/2),
    vel:createVector(0,0),
    radius:60,
    color:"rgb(236, 240, 56)",
    mass:1.989e30
  }
  this.earth = {
    pos:createVector(1*canvas.width/4,2*canvas.height/4),
    vel:createVector(0,5),
    radius:20,
    color:"rgb(56, 141, 240)",
    mass:5.972e24
  }
  // LIST
  this.list = [this.sun,this.earth];
}
