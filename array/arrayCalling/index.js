var poeng = [];

poeng[0] = 23;
poeng[1] = 45;
poeng[2] = 72;
poeng[3] = 13;
poeng[9] = 80;
poeng[12] = 36;


var sum = 0;
for (var i = 0; i < poeng.length; i++) {
  if (poeng[i] !== undefined) {
    document.write("element nr "+i+" er " +poeng[i]+"<br>");
  }
}
