var minVideo = document.querySelector('#minVideo')
var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var halv = document.querySelector('#halvFart');
var dobbel = document.querySelector('#dobbelFart');
var start = document.querySelector('#start');


play.onclick = function() {
  minVideo.play();
}
pause.onclick = function() {
  minVideo.pause();
}
halv.onclick = function() {
  minVideo.playbackRate = 0.5;
  minVideo.play();
}
dobbel.onclick = function() {
  minVideo.playbackRate += 2;
  minVideo.play();
}
start.onclick = function() {
  minVideo.currentTime = 0;
}
