function Earth() {
  var planet = obj.earth;
  this.update = function(plant) {
    // accelerate towards every object
    var addedVel = {
      x:0,
      y:0
    }
    for (item in obj.list) {
      if (obj.list[item].mass !== planet.mass) {
        var gravPull = force.gravPull(planet.mass,obj.list[item].mass,planet.pos.x,planet.pos.y,obj.list[item].pos.x,obj.list[item].pos.y);
        addedVel.x += gravPull.x;
        addedVel.y += gravPull.y;
      }
    }
    planet.vel.x += addedVel.x;
    planet.vel.y += addedVel.y;

    // movement
    planet.pos.x += planet.vel.x;
    planet.pos.y += planet.vel.y;
  }
  this.draw = function(plant) {
    fill(planet.color);
    circle(planet.pos.x,planet.pos.y,planet.radius);
  }
}
