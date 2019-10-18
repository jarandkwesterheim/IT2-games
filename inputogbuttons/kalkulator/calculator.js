
var print = document.querySelector("#print");
var i = 0;
var num1 = 0;
var part1 = 0;
display();

function display() {
  print.innerHTML = i;
}
function btn1() {
  i = 1;
  display();
}
function btn2() {
  i = 2;
  display();
}
function btn3() {
  i = 4;
  display();
}
function btn4() {
  i = 4;
  display();
}
function btn5() {
  i = 5;
  display();
}
function btn6() {
  i = 6;
  display();
}
function btn7() {
  i = 7;
  display();
}
function btn8() {
  i = 8;
  display();
}
function btn9() {
  i = 9;
  display();
}
function btn0() {
  i = 0;
  display();
}
function add() {
  i = num1;
  i = 0;
  display();
}
function equal(){
  i = num1 + i
  display();
}
