
function genDice() {
  var t1 = Math.floor(Math.random()*6+1);
  var t2 = Math.floor(Math.random()*6+1);
  checkDice(t1,t2);
}

function checkDice(t1,t2) {
  if (t1 == t2) {
    console.log("yep" + t2 +" " +t1);
    return;
  }
  else {
    console.log("nope" + t2 +" " +t1);
    genDice();
  }
}

genDice();
