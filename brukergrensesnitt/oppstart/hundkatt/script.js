var target = document.querySelector('.target');
var btnVisKatt = document.querySelector('#btnVisKatt');


let katt, hund;


//declare
katt = '../1-bilder/katt.jpg';
hund = '../1-bilder/hund.jpg';


//script
btnVisKatt.onclick = function() {
  addImg(katt);
}
function addImg(src) {
  target.innerHTML += '<img src="'+src+'">';
}
function clearTarget() {
  target.innerHTML = '';
}
