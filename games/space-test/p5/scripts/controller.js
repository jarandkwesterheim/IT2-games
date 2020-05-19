function Controller() {
  this.move = function(mouseX,mouseY) {
    // MILD MOVEMENT
    var posMild = 2;
    var spdMild = 3;
    if (mouseX < canvas.width*(posMild)/10) {
      offset.x += spdMild; // if mouse is more than 90%, move cam right
    }
    if (mouseX > canvas.width*(10-posMild)/10) {
      offset.x -= spdMild; // if mouse is less than 10%, move cam left
    }
    if (mouseY < canvas.height*(posMild)/10) {
      offset.y += spdMild; // if mouse is more than 90%, move cam down
    }
    if (mouseY > canvas.height*(10-posMild)/10) {
      offset.y -= spdMild; // if mouse is less than 10%, move cam up
    }

    // SEVERE MOVEMENT
    var posSevere = 1;
    var spdSevere = 4;
    if (mouseX < canvas.width*(posSevere)/10) {
      offset.x += spdSevere; // if mouse is more than 90%, move cam right
    }
    if (mouseX > canvas.width*(10-posSevere)/10) {
      offset.x -= spdSevere; // if mouse is less than 10%, move cam left
    }
    if (mouseY < canvas.height*(posSevere)/10) {
      offset.y += spdSevere; // if mouse is more than 90%, move cam down
    }
    if (mouseY > canvas.height*(10-posSevere)/10) {
      offset.y -= spdSevere; // if mouse is less than 10%, move cam up
    }


    // LIMIT MOVIN
    var offsetmaxlength = canvas.width/4;
    offset.limit(offsetmaxlength);
  }
}
