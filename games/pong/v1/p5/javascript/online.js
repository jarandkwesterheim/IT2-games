var player,enemy,ball,playerId;
playerId = 'empty';
//firebase
  <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyCk90eY2a2qa1FZtuei_N-aKp-kEqXidrQ",
    authDomain: "chat-test-1f8d0.firebaseapp.com",
    databaseURL: "https://chat-test-1f8d0.firebaseio.com",
    projectId: "chat-test-1f8d0",
    storageBucket: "chat-test-1f8d0.appspot.com",
    messagingSenderId: "903842390094",
    appId: "1:903842390094:web:b4badd014978bc6a04631f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref();


  //function
function Online() {

  player = new Player;
  enemy = new Enemy;
  ball = new Ball;
  this.setId = function() {
    db.child('pong').child('lobbies').child('lobby1').child('players').on('value', snap => {
        if (playerId == 'empty') {
          console.log('set id');
          if (snap.val() == 0) {
            console.log(snap.val());
            playerId = 'player';
            db.child('pong').child('lobbies').child('lobby1').child('players').set(1);
          }
          else if (snap.val() == 1) {
            console.log(snap.val());
            playerId = 'enemy';
            db.child('pong').child('lobbies').child('lobby1').child('players').set(2);
          }
          else playerId = 'spec';
        }
    })
  }
  this.subtractOnlinePlayers = function() {
    db.child('pong').child('lobbies').child('lobby1').child('players').on('value', snap => {
      if (snap.val() == 1) {
        db.child('pong').child('lobbies').child('lobby1').child('players').set(0);
      }
      else if (snap.val() == 2) {
        db.child('pong').child('lobbies').child('lobby1').child('players').set(1);
      }
    })
  }

  this.setPos = function(obj) {
    if (obj == 'enemy') {
      db.child('pong').child('lobbies').child('lobby1').child('enemy').child('x').set(enemy.pos.x)
      db.child('pong').child('lobbies').child('lobby1').child('enemy').child('y').set(enemy.pos.y)
    }
    else if (obj == 'player') {
      db.child('pong').child('lobbies').child('lobby1').child('player').child('x').set(player.pos.x)
      db.child('pong').child('lobbies').child('lobby1').child('player').child('y').set(player.pos.y)
    }
    else if (obj == 'ball') {
      db.child('pong').child('lobbies').child('lobby1').child('ball').child('x').set(ball.pos.x)
      db.child('pong').child('lobbies').child('lobby1').child('ball').child('y').set(ball.pos.y)
    }
  }
  this.getPos = function(obj) {
    if (obj == 'enemy') {
      db.child('pong').child('lobbies').child('lobby1').child('enemy').child('x').on('value', snap =>{enemy.pos.x = snap.val()})
      db.child('pong').child('lobbies').child('lobby1').child('enemy').child('y').on('value', snap =>{enemy.pos.y = snap.val()})
    }
    else if (obj == 'player') {
      db.child('pong').child('lobbies').child('lobby1').child('player').child('x').on('value', snap =>{player.pos.x = snap.val()})
      db.child('pong').child('lobbies').child('lobby1').child('player').child('y').on('value', snap =>{player.pos.y = snap.val()})
    }
    else if (obj == 'ball') {
      db.child('pong').child('lobbies').child('lobby1').child('ball').child('x').on('value', snap =>{ball.pos.x = snap.val()})
      db.child('pong').child('lobbies').child('lobby1').child('ball').child('y').on('value', snap =>{ball.pos.y = snap.val()})
    }
  }
}
