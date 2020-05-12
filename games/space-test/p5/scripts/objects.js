function Objects() {

  // OBJECTS
  this.sun = {
    pos:createVector(canvas.width*5,canvas.height*5),
    vel:createVector(0,0),
    radius:360,
    color:"rgb(236, 240, 56)",
    mass:1.989e30
  }
  this.earth = {
    pos:createVector(canvas.width*3,canvas.height*5),
    vel:createVector(0,12),
    radius:90,
    color:"rgb(56, 141, 240)",
    mass:5.972e24
  }
  this.moon = {
    pos:createVector(canvas.width*3-50,canvas.height*5),
    vel:createVector(0.2,12),
    radius:50,
    color:"rgb(169, 171, 163)",
    mass:7.35e22
  }
  // LIST
  this.list = [this.sun,this.earth,this.moon];

  // UPDATING OBJECTS
  this.update = function(planet) {
    // accelerate towards every object
    var addedVel = {
      x:0,
      y:0
    }
    for (item in obj.list) {
      if (obj.list[item].mass !== planet.mass) {
        var gravPull = force.gravPull(planet.mass,obj.list[item].mass,planet.pos.x,planet.pos.y,obj.list[item].pos.x,obj.list[item].pos.y,planet.radius,obj.list[item].radius);
        addedVel.x += gravPull.x;
        addedVel.y += gravPull.y;
      }
    }
    planet.vel.x += addedVel.x;
    planet.vel.y += addedVel.y;

    // movement
    planet.pos.x += planet.vel.x * (deltaTime / 50);
    planet.pos.y += planet.vel.y * (deltaTime / 50);
  }

  // DRAW OBJECTS
  this.draw = function(planet) {
    fill(planet.color);
    circle(planet.pos.x*zoomMul+offsetx,planet.pos.y*zoomMul+offsety,planet.radius*zoomMul);
  }
}
