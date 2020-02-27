function Online() {
  const uid = 'AAsNeY9wmnXtV0yIe4hFll1WDA03';
  const db = firebase.database().ref(uid);
  const userDb = firebase.database().ref('userdatabase');


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });




  var groupArr = [];


  //functions
  db.child("site").child("groups").on("child_added", snap => {
    groupArr.push(snap.val());

    //run site when info is fetched
    time.getDate();
    //displayPresets();
  })
  this.checkPin = function(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(error.message);
      //
    });
  }
  this.getEmail = function(email) {
    let check = false;
    userDb.child('users').child('emails').on('value', snap => {
      var arr = snap.val();
      for(var item in arr) {
        if (email == arr[item]) {
          check = true;
        }
      }
    })
    return check;
  }

}
