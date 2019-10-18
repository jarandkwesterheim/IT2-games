var inp = document.querySelector("#inp");
var fb = document.querySelector("#feedback");
var i = Math.floor(Math.random()*100)+1;
var tries = 0;

function checkKey() {
  var key = event.keyCode;
  if (key == 13) {
    tries++;
    checkNumber();
    inp.value="";
  }
}
function checkNumber() {
  if (inp.value == i) {fb.innerHTML = 'Gratulerer! Du brukte '+tries+' forsøk.'};
  if (inp.value < i) {fb.innerHTML = 'Det var for lavt, prøv igjen!'};
  if (inp.value > i) {fb.innerHTML = 'Det var for høyt, prøv igjen!'};
}
