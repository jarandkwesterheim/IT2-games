function Objects() {
  // LIST
  this.list = [
    // OBJECTS
    this.sun = {
      pos:createVector(canvas.width*5,canvas.height*5),
      vel:createVector(0,0),
      radius:360,
      color:"rgb(236,240,56)",
      mass:1.989e30,
      name:"sun"
    },
    this.earth = {
      pos:createVector(canvas.width*5-3000,canvas.height*5),
      vel:createVector(0,8.07), //8.12 for almost perfect ellipse
      radius:90,
      color:"rgb(56,141,240)",
      mass:5.972e24,
      name:"earth"
    },
    this.planety = {
      pos:createVector(canvas.width*8+400,canvas.height*5+400),
      vel:createVector(-1,-5),
      radius:120,
      color:"rgb(226,19,168)",
      mass:5.3e27,
      name:"planety"
    },
    this.musk = {
      pos:createVector(canvas.width*8,canvas.height*5),
      vel:createVector(0,-5.3),
      radius:170,
      color:"rgb(214,103,12)",
      mass:4.5e27,
      name:"musk"
    },
    this.alex = {
      pos:createVector(canvas.width*6,canvas.height*5),
      vel:createVector(0,0),
      radius:100,
      color:"rgb(16,214,12)",
      mass:4.5e24,
      name:"alex"
    }
  ];

  // SORT EVERY OBJECT FOR UPDATE
  this.updateAll = function() {
    for (var index in this.list) {
      this.update(this.list[index], index);
    }
  }

  // SORT EVERY OBJECT FOR DRAW
  this.drawAll = function() {
    for (var index in this.list) {
      this.draw(this.list[index]);
    }
  }
  // UPDATING INDIVIDUAL OBJECTS
  this.update = function(planet, index) {
    // accelerate towards every object
    var addedVel = {
      x:0,
      y:0
    }
    for (item of obj.list) {
      if (item.mass !== planet.mass) {
        var gravPull = force.gravPull(planet.mass,item.mass,planet.pos.x,planet.pos.y,item.pos.x,item.pos.y,planet.radius,item.radius);
        // add new forces to velocity
        addedVel.x += gravPull.x;
        addedVel.y += gravPull.y;

        // test collision between theese two planets
        collision.test(item, planet, obj.list.indexOf(item), index)
      }
    }
    planet.vel.x += addedVel.x;
    planet.vel.y += addedVel.y;

    // movement
    planet.pos.x += planet.vel.x * (deltaTime / 20);
    planet.pos.y += planet.vel.y * (deltaTime / 20);
  }

  // DRAW OBJECTS
  this.draw = function(planet) {
    fill(planet.color);
    circle(planet.pos.x*zoomMul+offset.x,planet.pos.y*zoomMul+offset.y,planet.radius*zoomMul);
  }
}
