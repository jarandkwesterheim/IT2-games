var sqR = document.querySelector('.rodFirkant');
var sqB = document.querySelector('.blaFirkant');


var animasjon = [
    {top:"0%", transform:"rotate(0deg)"},
    {top:"80%", transform:"rotate(360deg)"}
  ]
var kontrollObj = {duration:1000, direction:"alternate", iterations:Infinity};

var myAni1 = sqR.animate(animasjon,kontrollObj)
var myAni2 = sqB.animate(animasjon,kontrollObj)
myAni1.pause();
myAni2.pause();
myAni2.currentTime = 1000;



sqR.onclick = playPause;
sqB.onclick = playPause;

function playPause() {
  if (myAni1.playState == "paused"){
    myAni1.play();
    myAni2.play();
  }
  else {
    myAni1.pause();
    myAni2.pause();
  }
}
