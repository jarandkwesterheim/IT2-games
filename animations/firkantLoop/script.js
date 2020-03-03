var square = document.querySelector('#square');

var myAni = square.animate(
  [ {opacity:0,top:"50px",left:"50px"},
    {opacity:0.5,top:"50px",left:(innerWidth -150) + "px"},
    {opacity:0.5,top: (innerHeight-150) + "px",left:(innerWidth - 150) + "px"}],
    {duration: 2000, iterations:Infinity, direction: "alternate"})


//myAni.pause()
//myAni.play()
//myAni.reverse()

//myAni.playstate = "paused"
//myAni.playbakcRate = 1.5
