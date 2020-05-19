function Stars() {
  this.generate = function() {
    var starCount = 1500;
    var starSizeMin = 1;
    var starSizeMax = 3;
    let starX, starY, starS;

    //randomize position
    for (var i = 0; i < starCount; i++) {
      //randomize x position
      starX = Math.floor(Math.random()*(canvas.width*1.5))+1-canvas.width/8; //generates stars 2x size of screen, positions in middle for futher movement around
      starY = Math.floor(Math.random()*(canvas.height*1.5))+1-canvas.height/8; //--||--
      starS = Math.floor(Math.random()*(starSizeMax-starSizeMin))+1+starSizeMin;

      //put in array
      starArr[i] = [starX, starY, starS];
    }
    starArr;
  }
  this.draw = function() {
    var starColor = 'rgb(221, 222, 211)';
    for (var i = 0; i < starArr.length; i++) {
      if (Math.random() < 1e-3 && i < starArr.length-1 ) {
        i++;
      } // stjerneglimt
      fill(starColor);
      circle(starArr[i][0] +starArr[i][0]*zoomMul/7+offset.x/7 , starArr[i][1] +starArr[i][1]*zoomMul/7+offset.y/7 , starArr[i][2] +starArr[i][2]*zoomMul/7);
    }
  }
}
