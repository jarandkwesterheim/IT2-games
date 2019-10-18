var inp = document.querySelector("#input");
var target = document.querySelector("#target");

function submit() {
  if (inp.value > 140) {
    target.innerHTML = 'Du kan kjøre alle berg og dalbanene.';
  } else if (inp.value > 130 && inp.value <= 140) {
    target.innerHTML = 'Du kan kjøre to av berg og dalbanene';
  } else if (inp.value > 120 && inp.value <= 130) {
    target.innerHTML = 'Du må ha med deg en voksen';
  } else {
    target.innerHTML = 'Prøv noen andre attraksjoner';
  }

}
