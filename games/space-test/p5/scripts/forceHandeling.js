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





  // MATHS
    // halverer vector
  this.half = function(vector) {
    vector.x = vector.x/2;
    vector.y = vector.y/2;
    return vector;
  }
    // speed combining
  this.comb = function(alp, bet) {
    let ux, uy, v1x, v2x, v1y, v2y, m1, m2;
    v1x = obj.list[alp].vel.x;
    v1y = obj.list[alp].vel.y;
    m1 = obj.list[alp].mass;

    v2x = obj.list[bet].vel.x;
    v2y = obj.list[bet].vel.y;
    m2 = obj.list[bet].mass;

    ux = (m1*v1x + m2*v2x) / (m1 + m2);
    uy = (m1*v1y + m2*v2y) / (m1 + m2);
    return createVector(ux,uy);
  }
}
