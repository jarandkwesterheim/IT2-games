var inp = document.querySelector("#input");
var btn = document.querySelector("#btn");
var target = document.querySelector("#info");

var nameArr = [
  "Hi nuub",
];

function readyTarget() {
  target.innerHTML = "";
}
function printNames() {
  readyTarget();
  for (var name of nameArr) {
    target.innerHTML += name +"<br>";
  }
}
printNames();

function deleteArr(index) {
  if (index >= 0) {
    nameArr.splice(index,1);
    printNames();
  }
}

btn.onclick = function() {
  crntInp = inp.value;
  var index = nameArr.indexOf(crntInp);
  deleteArr(index);
}

function addArr() {
  nameArr.push("Peter Griffin");
  printNames();

  requestAnimationFrame(addArr);
}
addArr();
