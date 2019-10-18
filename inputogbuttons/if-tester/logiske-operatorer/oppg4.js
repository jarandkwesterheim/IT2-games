var ukedag = prompt("hvilken dag er det?");
var dato = prompt("hvilken dato er det?");

if(ukedag.toLowerCase() === "fredag" && dato === "13") {
  document.write("Pass på, i dag er det fredag den 13.");
} else {
  document.write("Ha en god dag!");
}
