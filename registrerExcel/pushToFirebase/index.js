// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHfwlxgG8l0jQFhlnljD-I9iAx1HAwCjo",
    authDomain: "volunteerer-962e1.firebaseapp.com",
    databaseURL: "https://volunteerer-962e1.firebaseio.com",
    projectId: "volunteerer-962e1",
    storageBucket: "volunteerer-962e1.appspot.com",
    messagingSenderId: "1008555242767",
    appId: "1:1008555242767:web:7a5782f6b470cf48383a7a",
    measurementId: "G-Q09KR06K76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref();
  var test1 = db.child('test1');

//firebase functions
db.on('child_added', snap => {
  genHtml(snap.val());
})
db.on('child_changed', snap => {
  genHtml(snap.val());
})



//var
var target = document.querySelector('.target');


//funcitons
function genHtml(snap) {
  target.innerHTML += `
  <div class="target-item" id="${snap.Id}">
    <b>${snap.Dag}</b>
    <p>${snap.Fra}</p>
    <p>${snap.Til}</p>
    <div class="target-item-popup">
      <input type="text" name="" value="" placeholder="Navn">
      <input type="text" name="" value="" placeholder="Telefon">
      <input type="text" name="" value="" placeholder="Lag">
      <button type="button" onclick="registrer('${snap.Id}')">REGISTRER</button>
    </div>
  </div>
  `
}
function registrer(id) {
  db.orderByChild('Id').equalTo(id).child('Name').set('')
}
