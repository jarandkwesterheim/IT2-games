/*
Skrive ubb fravær i prosent
Hvis fraver er under 5 prosent skal siden bli grønnn
Hvis fravær er 5-10 prosent skal siden bli oransje
Hvis fraværet er over 10 prosent skal siden blie rød
*/

var inp1 = document.querySelector("#inp1");
var btn1 = document.querySelector("#btn1");




btn1.onclick = function () {
  giveFeedback();
}
inp1.onchange = function () {
  giveFeedback();
}
function giveFeedback() {
  var prosent = inp1.value;
  if (prosent === "") {
    alert("Fyll ut feltet");
    return;
  }
  if (prosent < 5) {
    document.body.style.backgroundColor = "green";
  }
  else if (prosent < 10) {
    document.body.style.cssText = 'background-color: orange;';
  }
  else {
    document.body.style.cssText = 'background-color: red;';
  }
}
