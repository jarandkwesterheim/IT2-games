var target = document.querySelector('#targetSpan');
var inpP = document.querySelector('#pris');
var inpR = document.querySelector('#rabatt');
var btn = document.querySelector('#btn');
var sluttpris, vekstfaktor;

function resetInp() {
  inpP.value = "";
  inpR.value = "";
}

function checkVal() {
  if (inpP.value < 0) {
    alert('pris kan ikke være negativ');
  }
  else {
    vekstfaktor = (100-inpR.value)/100;
    sluttpris = (inpP.value*vekstfaktor);
    target.innerHTML = sluttpris;
    resetInp();
  }
}
