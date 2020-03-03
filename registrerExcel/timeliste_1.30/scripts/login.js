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
  var loginCont = document.querySelector('.backgroundContainer');
  var passcodeDiv = document.querySelector('.passcode');
  var passcodeDisplay = document.querySelector('.passcode--display');
  var emailInp = document.querySelector('#emailInp');
  var emailInpValidate = document.querySelector('#emailInpValidate');
  var backgroundContainer = document.querySelector('.backgroundContainer');

  let emailInpValidateIcon;
  var codeArr = [];


  //functions
  function loadInpEmail() {
    emailInp.value = getCookie("email");
  }
  loadInpEmail();


  function checkPin() {
    //find if email is correct
    if (emailInpValidateIcon == false) {
      //email shake animation
      return;
    }
    //find if code is right for email
    var pin = 'pc';
    for (var i = 0; i < codeArr.length; i++) {
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
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in
          loginCont.classList.add('slide-out-top');
          document.body.style.overflow = 'visible';





          fillGroup();
          fillTime();

        } else {
          // No user is signed in.
        }
      });
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
      setCookie("email", emailInp.value, 7)
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
  eventHandelerEmailInp();


  //set and get cookies
  function setCookie (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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
