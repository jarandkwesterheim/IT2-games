let time, online;

time = new Time;
online = new Online;


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

function logOut() {
  console.log('loggin out');
  firebase.auth().signOut().then(function() {
    //window.location.href = 'file:///Users/jarandwesterheim/Documents/IT2/registrerExcel/timeliste_1.2/html/login.html'
  }).catch(function(error) {
    // An error happened.
    window.alert(error.message);
  });

}
