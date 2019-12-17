//site ref
var header = document.querySelector('#header');
var img = document.querySelector('#img');
var target = document.querySelector('.target');


//variabler om bestilling
var middager, pers, prisPers, pris, navn, adresse;
var prisStorFamilie = 70;
var prisLitenFamilie = 80;
var minFam = 1;
var maxFam = 10;


//variabler for bilde
imgSrc = ['bilder/middag.png','','bilder/matkasse2.png','bilder/matkasse3.png'];

loadDefault();

function loadDefault() {
  //bestemmer bilde
  img.src = imgSrc[0];
  //genererer html
  target.innerHTML = `
  <p>Hvor mange middager vil du ha?</p>
  <button type="button" name="button" id="middager2">2 middager</button>
  <button type="button" name="button" id="middager3">3 middager</button>
  <br>
  <p>Hvor mange personer skal spise?</p>
  <input type="number" name="" value="" placeholder="Antall personer" id="inpPers">
  <br>
  <button type="button" name="button" id="neste1">Neste</button>
  `;

  //var under loadDefault()
  btnM2 = document.querySelector('#middager2');
  btnM3 = document.querySelector('#middager3');
  inpPers = document.querySelector('#inpPers');
  neste1 = document.querySelector('#neste1');




//aktive knapper og funksjoner under loadDefault();
  btnM2.onclick = function() {
    middager = 2;
    this.style = 'background-color: rgb(170, 171, 176)';
    btnM3.style = 'background-color: white';
  }
  btnM3.onclick = function() {
    middager = 3;
    this.style = 'background-color: rgb(170, 171, 176)';
    btnM2.style = 'background-color: white';
  }
  neste1.onclick = function() {
    if ((inpPers.value >= minFam && inpPers.value <= maxFam) && middager > 0) {
      pers = inpPers.value;
      //regn ut pris per måltid per person
      if (pers < 5) {
        prisPers = prisLitenFamilie;
      }
      else {
        prisPers = prisStorFamilie;
      }
      //regn ut samlet pris
      pris = prisPers*pers*middager;

      loadInfo();
    }
    else {
      target.innerHTML = '<p>Feil! Personer må være mellom 1 og 10, og middager må være valgt</p><br><button type="button" name="button" onclick="loadDefault()">Tilbake</button>'
    }
  }
}


function loadInfo() {
  img.src = imgSrc[middager];

  //tegn opp ny html
  target.innerHTML = `
    <p>Total pris er: `+pris+`</p>
    <p><b>Skriv inn navn og adresse for å bekrefte bestillingen:</b></p>
    <p>Navn:</p>
    <input type="text" name="" value="" id="inpNavn" placeholder="Espen Askeladd">

    <p>Adresse:</p>
    <input type="text" name="" value="" id="inpAdr" placeholder="Eventyrveien 1">
    <br><br>
    <button type="button" name="button" onclick="loadDefault()">Tilbake</button>
    <button type="button" name="button" id="btnBekreft">Bekreft bestilling, navn og adresse</button>
  `


  var btnBekreft = document.querySelector('#btnBekreft');
  var inpNavn = document.querySelector('#inpNavn');
  var inpAdr = document.querySelector('#inpAdr');

  btnBekreft.onclick = function() {
    if (inpNavn.value !== "" && inpAdr.value !== "") {
      navn = inpNavn.value;
      adresse = inpAdr.value;
      loadBestilling();
    }
  }
}
function loadBestilling() {
  target.innerHTML = `
    <h3>Din bestilling er:</h3>
    <p>Navn: `+navn+`</p>
    <p>Adresse: `+adresse+`</p>
    <p>`+middager+` middager, `+pers+` personer.</p>
    <p>`+prisPers+` kr per person per måltid.</p>
    <p>Totalt `+pris+` kr</p>
    <br><br>
    <button type="button" name="button" onclick="loadInfo()">Tilbake</button>
    <button type="button" name="button" onclick="loadDefault()">OK(tar deg til starten)</button>
  `;
}
