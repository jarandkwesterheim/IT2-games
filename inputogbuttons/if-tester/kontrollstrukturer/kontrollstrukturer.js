//Hvis antall epler er mer enn 8 skal vi skrive ut: vi har mange epler
//ellers skal vu skrive: vi vil ha flere epler
//if else: hvis noe er oppfylt så skal noe skje, eller ikke skje

var inp = document.querySelector("#input");

if (inp > 8) {
  document.write("Vi har mange epler");
} else {
  document.write("Vi vil ha flere epler");
}


//Sjekk om riktig svar
var svar = prompt("Hva heter hovedstaden i Norge?");

if (svar.toLowerCase() === "oslo") {
  document.write("<br>Riktig");
} else {
  document.write("<br>Feil");
}
//Ikke lik: !==
// <, >, <=, >=
