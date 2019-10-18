/*var fornavn = "Ole";
var etternavn = "Brum";
var fullstendignavn = fornavn +" " +etternavn

document.write("Hei " +fornavn +" " +etternavn +"<br>");
document.write("Hei igjen " +fullstendignavn);*/

var fornavn = document.getElementById("input");
var etternavn = prompt("Skriv inn etternavn");
var fullstendignavn = fornavn +" " +etternavn;

function submit() {
  document.write("Hei " +fullstendignavn);
}
