//for: vet antall ganger vi ønsker å gjøre noe

for (var i = 1; i <= 10; i++){
  document.write("Hei til "+i+"<br>");
}

//summerer tallene fra 1 til 100
var sum = 0;
for(var j = 1; j<=100; j++){
  document.write("+"+j+"<br>")
  sum = sum + j;
}
document.write("sum: "+sum+"<br>");


//alle oddetallene mellom 0 og 39
var h = 0;
for (h = 0; h <= 30; h++){
  if (h%2 !== 0) {
    document.write(h+"<br>");
  }
}
