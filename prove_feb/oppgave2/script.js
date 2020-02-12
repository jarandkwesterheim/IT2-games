var bestilling = document.querySelector('.bestilling');
var bestillingBtn = document.querySelector('#bestillingBtn');
var tur = document.querySelector('.turChoice');
var antVks = document.querySelector('.antVoksne');
var antBarn = document.querySelector('.antBarn');
var guide = document.querySelector('.guide');






let message, turMsg, barnMsg, voksneMsg, guideMsg, pris, prisPerBarn, prisPerVoksen;



bestillingBtn.onclick = function() {
  message = '';
  //velg tur

  //husker ikke hvordan man henter radiobutton value, derfor setter jeg verdien til enten 1 eller 2 så programmet fortsatt fungerer
  tur.value = Math.floor(Math.random()*2);
  console.log(tur.value);



  if (tur.value !== 1 && tur.value !== 0) {
    //hvis du ikke har valgt tur, si ifra og hopp ut av funksjonen.
    message = '<p>Velg en av turene.</p>'
    writeBestilling();
    return;
  }
  else {
    if (tur.value == 0) {
      prisPerVoksen = 500;
      prisPerBarn = 250;
      tur.value = 'Du har valgt tur i Nordmarka.'
    }
    else {
      prisPerVoksen = 700;
      prisPerBarn = 350;
      tur.value = 'Du har valgt tur i fjellet.'
    }
    turMsg = tur.value;
  }


  //velg antall personer på turen

  if (voksneMsg == 0 && barnMsg == 0) {
    //hvis du ikke har valgt hverken barn eller voksen, si ifra og hopp ut av funksjonen.
    message += '<p>Velg antall personer på turen</p>';
    writeBestilling();
    return;
  }
  else {
    voksneMsg = antVks.value;
    barnMsg = antBarn.value;
  }
  if (guide.value == 0) {
    //hvis du ikke har valgt guide, si ifra og hopp ut av funksjonen.
    message += '<p>Velg en guide.</p>';
    writeBestilling();
    return;
  }
  else {
    if (guide.value == 1) {
      guideMsg = 'Severin Suveren';
    }
  }

  //regn ut Pris
  pris = Number(antVks.value)*Number(prisPerVoksen) +Number(antBarn.value)*Number(prisPerBarn);

  //skriv melding til bestillingen
  message = `
  <p>`+turMsg+`</p>
  <p>Antall Voksne: `+voksneMsg+`</p>
  <p>Antall barn: `+barnMsg+`</p>
  <p>Guide: `+guideMsg+`</p>
  <p>Total pris: `+pris+` kr</p>
  `

  writeBestilling();
}



function writeBestilling() {
  bestilling.innerHTML = '';
  bestilling.innerHTML = message;
}
