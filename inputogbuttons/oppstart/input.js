var btnSkrivUt = document.querySelector("#btnSkrivUt");
var utskrift = document.querySelector("#utskrift");
var inpNavn = document.querySelector("#inpNavn");

btnSkrivUt.onclick = function() {
  utskrift.innerHTML = "Hei " +inpNavn;
}
