function Login() {

  //declare
  var passcodeDiv = document.querySelector('.passcode');
  var passcodeDisplay = document.querySelector('.passcode--display');
  var emailInp = document.querySelector('#emailInp');
  var emailInpValidate = document.querySelector('#emailInpValidate');


  var codeArr = [];



  //functions
  function eventHandelerPasscode(evt) {
    var btnClicked = evt.target.id;
    if (btnClicked == '') {}
    else if (btnClicked >= 0 && btnClicked <= 9) {
      codeArr.push(btnClicked);
      passcodeDisplay.style.webkitAnimationIterationCount = '1';
    }
    else if (btnClicked == 'bck') {
      codeArr.splice(-1);
    }
    else if (btnClicked == 'entr') {
    }
    updatePin();
    sound();

    //corrects
    if (codeArr.length < 1) {
      passcodeDisplay.innerHTML = '|';
      passcodeDisplay.style.webkitAnimationIterationCount = 'infinite';
    }
  }
  function eventHandelerEmailInp() {
    if (online.getEmail(emailInp.value)) {
      emailInpValidate.innerHTML = '<i class="fas fa-check-circle"></i>';
      document.querySelector('.fa-check-circle').style.color = 'rgb(41, 72, 232)';
    }
    else {
      emailInpValidate.innerHTML = '<i class="fas fa-times-circle"></i>';
      document.querySelector('.fa-times-circle').style.color = '#e57873';
    }
  }

  //innerHTML
  function updatePin() {
    passcodeDisplay.innerHTML = "";
    for (var int in codeArr) {
      passcodeDisplay.innerHTML += codeArr[int];
    }
  }

  //animations

  //sound
  function sound() {
    var click = document.querySelector('#clickSound');
    click.currentTime = 0.03;
    click.play();
  }

  //onclicks
  passcodeDiv.onclick = eventHandelerPasscode;
  emailInp.onkeyup = eventHandelerEmailInp;
}
