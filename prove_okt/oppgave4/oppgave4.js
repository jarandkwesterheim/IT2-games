var inp = document.querySelector("#inp");
var target = document.querySelector("#target");

function submit() {
  target.innerHTML = '';
  for (var i = inp.value; i > 0; i--) {
    if (i%2 !== 0) {
      target.innerHTML += i+'<br>'
    }
  }
}
