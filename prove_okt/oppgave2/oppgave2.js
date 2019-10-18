var input = document.querySelector("#input");
var target = document.querySelector("#target");

function convert() {
  output = (input.value-32)/1.8
  target.innerHTML ="<br>"+ output.toFixed(2) +" grader Celsius."
}
