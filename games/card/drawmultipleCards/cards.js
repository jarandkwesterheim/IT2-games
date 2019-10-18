function drawCardyeeet(){
  var suitNum = Math.floor(Math.random()*4+1);
  var nNum = Math.floor(Math.random()*13+1);
  var display = document.querySelector(".display");

  display.innerHTML += `
  <div class="card">
    <div id="suit-container1">
      <div id="displayNumber"></div>
      <div id="displaySuit"></div>
    </div>
    <div class="middle-art">
      <div id="first">
      </div>
      <div id="second"></div>
      <div id="third"></div>
    </div>
    <div id="suit-container2">
      <div id="displayNumber2"></div>
      <div id="displaySuit2"></div>
    </div>
  </div>
  `
  var dNum = document.querySelector("#displayNumber");
  var dSuit = document.querySelector("#displaySuit");
  var dNum2 = document.querySelector("#displayNumber2");
  var dSuit2 = document.querySelector("#displaySuit2");
  var first = document.querySelector("#first");
  var second = document.querySelector("#second");
  var third = document.querySelector("#third");
  var btn = document.querySelector("#btn");
  var suit = 4;
  var num = 1;
  var clr = 0;
  drawCard();
  function drawCard() {
    drawSuit();
    drawNumber();
    drawMiddleArt(num,suit);
    dNum.innerHTML = num;
    dSuit.innerHTML = suit;
    dNum2.innerHTML = num;
    dSuit2.innerHTML = suit;
  }
  function drawSuit() {
    if (suitNum === 1) {
      suit = '<img src="suits/Card_club.svg.png" alt="heart">';
    }else if (suitNum === 2) {
      suit = '<img src="suits/heart.png" alt="heart">';
    }else if (suitNum === 3) {
      suit = '<img src="suits/diamond.png" alt="heart">';
    } else {
      suit = '<img src="suits/spade.png" alt="heart">';
    }
    clr = suitNum;
  }
  function drawNumber() {
    if (nNum === 1) {
      num = "A";
    }else if (nNum === 11){
      num = "J";
    }else if (nNum === 12){
      num = "Q";
    }else if (nNum === 13){
      num = "K";
    }else {
      num = nNum;
    }
  }
  function drawMiddleArt(num,suit) {
    first.innerHTML = '';
    second.innerHTML = '';
    third.innerHTML = '';
    var blank = '<img src="faces/blank.png" alt="heart">';
    document.querySelector("#second").style.cssText = 'transform: scale(1);'
    if (clr == 2) {
      document.querySelector(".card").style.cssText = 'color: red;'
    }else if (clr == 3) {
      document.querySelector(".card").style.cssText = 'color: red;'
    }else{
      document.querySelector(".card").style.cssText = 'color: black;'
    };
    //1
    if (num == "A") {
      second.innerHTML += suit;
      document.querySelector("#second").style.cssText = 'transform: scale(2.4);'
    }
    //2-3
    else if (num <= 3) {
      for (var i = 0; i < num; i++) {
        second.innerHTML += suit;
      }
    }
    //4
    else if (num == 4) {
      for (var i = 0; i < 2; i++) {
        first.innerHTML += suit;
      };
      for (var i = 0; i < 2; i++) {
        third.innerHTML += suit;
      }
    }
    //5
    else if (num == 5) {
      for (var i = 0; i < 2; i++) {
        first.innerHTML += suit;
      };
      for (var i = 0; i < 2; i++) {
        third.innerHTML += suit;
      };
      second.innerHTML += suit;
    }
    //6
    else if (num == 6) {
      for (var i = 0; i < 3; i++) {
        first.innerHTML += suit;
      };
      for (var i = 0; i < 3; i++) {
        third.innerHTML += suit;
      }
    }
    //7-8
    else if (num <= 8) {
      for (var i = 0; i < 3; i++) {
        first.innerHTML += suit;
      };
      for (var i = 0; i < 3; i++) {
        third.innerHTML += suit;
      };
      if (num == 7) {
        second.innerHTML += suit;
      }
      else{
        second.innerHTML += suit;
        second.innerHTML += suit;
      }
    }
    //9-10
    else if (num <= 10) {
      for (var i = 0; i < 4; i++) {
        first.innerHTML += suit;
      };
      for (var i = 0; i < 4; i++) {
        third.innerHTML += suit;
      };
      if (num == 9) {
        second.innerHTML += suit;
      }
      else{
        second.innerHTML += suit;
        second.innerHTML += suit;
      }
    }
    //faces
    else{
      first.innerHTML += blank + blank + suit;

      second.innerHTML += blank + "<b>"+num+"</b>" + blank;

      third.innerHTML += suit+ blank + blank;
    }
  }
}
