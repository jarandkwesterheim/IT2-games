var input = document.querySelector("#input");
var target = document.querySelector("#target");


function hent() {
  target.innerHTML = "";
  var sum = 1;
  for(var i = input.value; i > 1; i--) {
    target.innerHTML += i+" * ";
    sum = sum*i;
  }
  target.innerHTML += "1 = "+sum;
}
