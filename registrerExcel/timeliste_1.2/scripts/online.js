function Online() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCeLEU-XFLPv_2s4CBvgt8-oGipeJtNv3s",
      authDomain: "registrerexcel.firebaseapp.com",
      databaseURL: "https://registrerexcel.firebaseio.com",
      projectId: "registrerexcel",
      storageBucket: "registrerexcel.appspot.com",
      messagingSenderId: "617832437723",
      appId: "1:617832437723:web:7de229c6cb864e7217f9fe",
      measurementId: "G-P3PSTCYYWE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  const db = firebase.database().ref();
  const userDb = db.child('userdatabase');



  var groupArr = [];


  //functions
  db.child("site").child("groups").on("child_added", snap => {
    groupArr.push(snap.val());

    //run site when info is fetched
    time.getDate();
    //displayPresets();
  })


  this.getEmail = function(email) {
    let check = false;
    userDb.child('users').orderByChild('email').on('value', snap => {
      console.log(snap.val());
    })
    return check;
  }

}
