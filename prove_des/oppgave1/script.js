var target = document.querySelector('.target');
var inpBarn1 = document.querySelector('#inpBarn1');
var inpBarn2 = document.querySelector('#inpBarn2');
var btn = document.querySelector('#btn');


//resetter input på innlasting
inpBarn1.value = "";
inpBarn2.value = "";



//når knapp er trykket på, sjekker om input er fylt ut før den sender til kalkulatoren
btn.onclick = function() {
  if (inpBarn1.value <= 0 || inpBarn2.value <= 0) {
    target.innerHTML = 'alderen kan ikke være mindre eller lik 0';
  }
  else if (inpBarn1.value !== "" && inpBarn2.value !== "") {
    calcPris();
  }
}


//kalkulator
function calcPris() {
  var v1 = Number(inpBarn1.value);
  var v2 = Number(inpBarn2.value);
  var sum = v1 + v2;

  if (sum < 4) {
    target.innerHTML = 'Barn på tilsammen '+sum+' år kommer inn gratis.';
  }
  else if (sum <= 18) {
    target.innerHTML = 'Med alderen '+sum+' år må man betale barnebillett.';
  }
  else {
    target.innerHTML = 'Med alderen '+sum+' må man betale voksenbillett.';
  }
  inpBarn1.value = "";
  inpBarn2.value = "";
}
