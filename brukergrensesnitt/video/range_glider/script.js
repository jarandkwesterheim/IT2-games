var video = document.querySelector('#video');
var glider = document.querySelector('#glider');
var play = document.querySelector('#play')

glider.onchange = function() {
  var newTime = ((glider.value/100)*video.duration);
  video.currentTime = newTime;
}
glider.onclick = function() {
  //video.stop();
}
play.onclick = function() {
  video.play();
}


function updateNavBar() {
  var videoCurrentTime = video.currentTime/video.duration*100;
  glider.value = videoCurrentTime;
}
setInterval(updateNavBar, 10);
