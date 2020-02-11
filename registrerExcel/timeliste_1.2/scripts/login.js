function Login() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });


  //declare
  var passcodeDiv = document.querySelector('.passcode');
  var passcodeDisplay = document.querySelector('.passcode--display');
  var emailInp = document.querySelector('#emailInp');
  var emailInpValidate = document.querySelector('#emailInpValidate');

  let emailInpValidateIcon;
  var codeArr = [];



  //functions
  function checkPin() {
    //find if email is correct
    console.log('find email');
    if (emailInpValidateIcon == false) {
      //email shake animation
      return;
    }
    console.log('find pin');
    //find if code is right for email
    let pin;
    pin = codeArr[0];
    for (var i = 1; i < codeArr.length; i++) {
      pin = pin + codeArr[i];
    }
    online.checkPin(emailInp.value, pin.toString())

  }

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
      checkPin();
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
    var emailChecked = online.getEmail(emailInp.value);
    if (emailChecked) {
      emailInpValidate.innerHTML = '<i class="fas fa-check-circle"></i>';
      document.querySelector('.fa-check-circle').style.color = 'rgb(41, 72, 232)';
      emailInpValidateIcon = true;
    }
    else {
      emailInpValidate.innerHTML = '<i class="fas fa-times-circle"></i>';
      document.querySelector('.fa-times-circle').style.color = '#e57873';
      emailInpValidateIcon = false;
      setTimeout(eventHandelerEmailInp, 100);
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
