var display = document.querySelector(".oppgave-display");
var display2 = document. querySelector(".boken-display");

function o1() {
  var l = prompt("Skriv inn lengde");
  var b = prompt("Skriv in bredde");
  var svara = l * b;
  var svarb = (Number(l) + Number(b))*2;
  display.innerHTML = "<b>oppgave a</b> <p>Arealet er " +svara +"<br><br> <b>oppgave b</b> <p>Omkretsen er " +svarb;
}

function o2() {
  var gammelPris = prompt("Skriv inn gammel pris");
  var rabattIProsent = prompt("Skriv inn rabatt");
  var vekstFaktor = 1 -rabattIProsent/100;
  var nyPris = gammelPris * vekstFaktor;

  display.innerHTML = "Gammel Pris: <b>" +gammelPris +"kr </b>  Rabatt: <b>" +rabattIProsent +"%</b><br>";
  display.innerHTML += "Ny pris er: <b>" +nyPris +"kr</b>";
}

function o3() {
  var navn = prompt("Skriv inn navnet ditt");
  var alder = prompt("Skriv in alderen din");
  var arIgjen = 100 - alder;
  display.innerHTML = "Hei " +navn +"! Du er " +alder +" år gammel. Det er " +arIgjen +" år igjen til 100-årsdagen din!";
}

function o4() {
  var onsketTemp = prompt("Hva er din ønskede temperatur?");
  var dagTemp = Number(onsketTemp)-5;
  var nattTemp = Number(onsketTemp)-8;
  display.innerHTML = "Din ønskede temperatur er " +onsketTemp +" grader. Panelovnen er beregnet til " +dagTemp +" grader om dagen og " +nattTemp +" grader om natten.";
}

function o5() {
  var radie = prompt("Skriv in radien til kula");
  var omkrets = 2*(Math.PI)*radie;
  var volum = (4*(Math.PI)*radie*radie*radie)/3;
  var overflate = 4*(Mathe.PI)*radie*radie;
  display2.innerHTML = "Volum: " +volum +"<br>omkrets: " +omkrets +"<br>overflate: " +overflate;
}
