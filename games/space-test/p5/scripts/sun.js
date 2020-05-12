function Sun() {
  // SUN
  this.update = function() {
    // acc
    var gravPull = force.gravPull(obj.sun.mass,obj.earth.mass,obj.sun.pos.x, obj.sun.pos.y,obj.earth.pos.x, obj.earth.pos.y);
    obj.sun.vel.x += gravPull.x;
    obj.sun.vel.y += gravPull.y;


    // movement
    obj.sun.pos.x += obj.sun.vel.x;
    obj.sun.pos.y += obj.sun.vel.y;
  }
  this.draw = function() {
    fill(obj.sun.color);
    circle(obj.sun.pos.x,obj.sun.pos.y,obj.sun.radius);
  }
}
