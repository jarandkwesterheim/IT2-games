var btnVideo = document.querySelector('#btnVideo');
var btnLyd = document.querySelector('#btnLyd');
var lyd = document.querySelector('#lyd');
var video = document.querySelector('#video');
let lydPlaying = false;


btnVideo.onclick = function() {
  playVideo();
  stopSound();
}
video.onclick = function() {
  stopVideo();
}
btnLyd.onclick = function() {
  stopVideo()
  if (lydPlaying) {
    stopSound();
  }
  else {
    playSound();
  }
}





function playSound() {
  lyd.currentTime = 0;
  lyd.play();
  lydPlaying = true;
}
function stopSound() {
  lyd.pause()
  lydPlaying = false;
}


function playVideo() {
  video.style.visibility = 'visible';
  video.play();
}
function stopVideo() {
  video.pause();
  video.style.visibility = 'hidden';
}
