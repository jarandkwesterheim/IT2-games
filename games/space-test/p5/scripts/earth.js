function Earth() {
  this.update = function() {
    // acc
    var gravPull = force.gravPull(obj.earth.mass,obj.sun.mass,obj.earth.pos.x, obj.earth.pos.y,obj.sun.pos.x, obj.sun.pos.y);
    obj.earth.vel.x += gravPull.x;
    obj.earth.vel.y += gravPull.y;



    // movement
    obj.earth.pos.x += obj.earth.vel.x;
    obj.earth.pos.y += obj.earth.vel.y;
  }
  this.draw = function() {
    fill(obj.earth.color);
    circle(obj.earth.pos.x,obj.earth.pos.y,obj.earth.radius);
  }
}
