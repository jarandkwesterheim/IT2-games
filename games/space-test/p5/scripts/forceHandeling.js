function ForceHandeling() {
  // all forces.
  var massMul = 1//10e-16; // multiplier to account for masses and distances


  // GRAVITY
  this.gravity = function(m1,m2,r) {
    var γ = (6.67408e-11);
    let f;
    return (γ*m1*m2)/(Math.pow(r,2));
  }


  // VELOCITY
  this.gravPull = function(m1,m2,posx1,posy1,posx2,posy2,r1,r2) {
    distx = Number(posx2-posx1); // safety distance x axis
    disty = Number(posy2-posy1); // safety distance y axis
    var r = Math.hypot(distx,disty)*5e7; // abs distance

    var gravForce = force.gravity(m1,m2,r);

    var angle = 1*Math.atan2(disty,distx);

    var gravForcey = 1*gravForce*Math.sin(angle);
    var gravForcex = 1*gravForce*Math.cos(angle);

    var gravPull = {
      x:gravForcex/m1*massMul,
      y:gravForcey/m1*massMul
    }
   return gravPull;
  }
}
