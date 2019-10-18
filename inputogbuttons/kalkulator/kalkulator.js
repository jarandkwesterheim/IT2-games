var num1 = document.querySelector("#inputNum1");
var num2 = document.querySelector("#inputNum2");
var btnAdd = document.querySelector("#btnAdd");
var btnSub = document.querySelector("#btnSub");
var btnMul = document.querySelector("#btnMul");
var btnDiv = document.querySelector("#btnDiv");
var print = document.querySelector("#print");

btnAdd.onclick = function(){
  var n1 = Number(num1.value);
  var n2 = Number(num2.value);
  var sum = n1 + n2;
  print.innerHTML = sum;
}
btnSub.onclick = function(){
  var n1 = Number(num1.value);
  var n2 = Number(num2.value);
  var sum = n1 - n2;
  print.innerHTML = sum;
}
btnMul.onclick = function(){
  var n1 = Number(num1.value);
  var n2 = Number(num2.value);
  var sum = n1 * n2;
  print.innerHTML = sum;
}
btnDiv.onclick = function(){
  var n1 = Number(num1.value);
  var n2 = Number(num2.value);
  var sum = n1 / n2;
  print.innerHTML = sum;
}
