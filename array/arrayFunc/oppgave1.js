var inp = document.querySelector("#input");
var nameList = [];
var target = document.querySelector("#target");


function checkEnter(event) {
  let key = event.keyCode;
  if(key == 13){
    reg();
    print();
  }
}

function reg() {
  var crntInp = inp.value;
  inp.value = "";
  if (crntInp == "") {
    return;
  }
  console.log("Pushed " + crntInp);
  nameList.push(crntInp);
}

function sortArray() {
  nameList.sort();
  print();
}

function reverse() {
  nameList.reverse();
  print();
}

function gone() {
  console.log("cleared");
  nameList = [];
  target.innerHTML = "";
}


function print() {
  target.innerHTML = '';
  for (var i = 0; i < nameList.length; i++) {
    target.innerHTML += nameList[i]+"<br>";
  }
}
