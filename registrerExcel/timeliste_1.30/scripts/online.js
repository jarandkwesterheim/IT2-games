function Online() {
  //AAsNeY9wmnXtV0yIe4hFll1WDA03
  var uid = '';
  const db = firebase.database().ref();
  var userDb = firebase.database().ref('userdatabase');


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
    } else {
      // No user is signed in.
    }
  });




  //functions
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
  this.getGroup = function() {
    var arr = [];
    db.child(uid).child('users').child('groups').on('child_added', snap => {
      arr.push(snap.val());
    })
    return arr;
  }

}
