

function checkLogin() {
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    window.alert(user.email)
  } else {
    // No user is signed in.
    window.alert('logged out')
  }
}
checkLogin();

function logOut() {
  console.log('loggin out');
  firebase.auth().signOut().then(function() {
    //window.location.href = 'file:///Users/jarandwesterheim/Documents/IT2/registrerExcel/timeliste_1.2/html/login.html'
  }).catch(function(error) {
    // An error happened.
    window.alert(error.message);
  });

































}
var groupDisplay = document.querySelector('#select-container-group');
var timeDisplay = document.querySelector('#select-container-time');
var groupCont = document.querySelector('#option-container-group');
var timeCont = document.querySelector('#option-container-time');
let groupArr;



groupDisplay.onclick = function() {
  fillGroup();
  groupCont.style.visibility = 'visible';
  groupCont.style.top = '100%';
}
timeDisplay.onclick = function() {
  timeCont.style.visibility = 'visible';
  timeCont.style.top = '100%';
}
groupCont.onclick = function(e) {
  var group = e.target.getAttribute('value');
  if (group == 'Create') {
    //push new group
  }
  else {
    groupDisplay.innerHTML = group;
  }
  groupCont.style.visibility = 'hidden';
  groupCont.style.top = '-20%';
}
timeCont.onclick = function(e) {
  var time = e.target.getAttribute('value');
  timeDisplay.innerHTML = time;
  timeCont.style.visibility = 'hidden';
  timeCont.style.top = '-20%';
}


function fillGroup() {
  groupArr = online.getGroup();

  groupCont.innerHTML = "";
  for (var i = 0; i < groupArr.length; i++) {
    groupCont.innerHTML += '<div value="'+groupArr[i]+'" class="option">'+groupArr[i]+'</div>';
  }
  groupCont.innerHTML += '<div value="Create" class="option option-bottom option-special"><i class="far fa-plus-square"></i>Create</div>';
}
function fillTime() {

}
