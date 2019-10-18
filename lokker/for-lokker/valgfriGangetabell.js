var i = 0;
var j = document.querySelector("#input");

function myFunction(){
  for (i=0; i<=100; i++){
    if (i%j.value==0){
      document.write(i+"<br>")
    }
  }
}
