var targetHTML = document.querySelector('.target');
var btnKatt = document.querySelector('#btnKatt');
var btnHund = document.querySelector('#btnHund');
var btnClear = document.querySelector('#btnClear');
var container = document.querySelector('.container');
var lyd = document.querySelector('#lyd');

let katt, hund;


/*declare
katt = '../1-bilder/katt.jpg';
hund = '../1-bilder/hund.jpg';*/

function visBilde(evt) {
  var knapp = evt.target;
  if (knapp.id == "btnClear") {
    clearTarget();
  }
  else {
    addImg(knapp.getAttribute("data-bilde"))
    playSound(knapp.getAttribute("data-lyd"))
  }
}

container.onclick = visBilde;



function addImg(src) {
  targetHTML.innerHTML += '<img src="'+src+'">';
}
function playSound(src) {
  lyd.src = src;
  lyd.play();
}
function clearTarget() {
  targetHTML.innerHTML = '';
  lyd.pause();
  lyd.currentTime = 0;
}
