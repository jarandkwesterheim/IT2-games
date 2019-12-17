var vareInp = document.querySelector('#vare');
var prisInp = document.querySelector('#pris');
var antallInp = document.querySelector('#antall');
var btnSlett = document.querySelector('#btnSlett');
var btnLeggTil = document.querySelector('#btnLeggTil');
var totalsum = document.querySelector('#totalsum');
var target = document.querySelector('.target');


var handleliste = [];
handleliste[0] = ['Potet',6,10];
handleliste[1] = ['Mais',15,3];
handleliste[2] = ['Kanel',36,1];


btnLeggTil.onclick = function() {
  if (vareInp.value !== "" && prisInp.value > 0 && antallInp.value > 0) {
    leggTil(vareInp.value,prisInp.value,antallInp.value);
    vareInp.value = "";
    prisInp.value = "";
    antallInp.value = "";
  }
  else {
    alert('Feil! Pris og antall må være 1 eller mer.');
  }
}
btnSlett.onclick = function() {
  if (handleliste.length > 0) {
    slett();
  }
}
//sletter siste
function slett() {
  handleliste.pop();
  updateHTML();

}
//legger til vare med antall og pris i array
function leggTil(vare,pris,antall) {
  if (checkExisting(vare,pris,antall) == false) {
    var index = handleliste.length;
    handleliste[index] = [vare,pris,antall];
  }
  updateHTML();
}

//hvis du skriver samme varen to ganger legger den til antallet i stedet for å lage to arrayer
function checkExisting(vare,pris,antall) {
  for (item in handleliste) {
    if (handleliste[item][0].toLowerCase() == vare.toLowerCase()) {
      if (handleliste[item][1] == pris) {
        handleliste[item][2] = Number(antall)+Number(handleliste[item][2]);
        return true;
      }
      else {
        alert('Feil! Samme vare er lagt inn 2 ganger, men med forskjellig pris.');
        return true;
      }
    }
    else {
      return false;
    }
  }
}

//oppdaterer alle verdiene så de vises i html
function updateHTML() {
  target.innerHTML = "";
  for (item in handleliste) {
    target.innerHTML += '<p> - '+handleliste[item][0]+', pris: '+handleliste[item][1]+', antall: '+handleliste[item][2]+'</p>';
  }

  //regner totalsum
  var sum = 0;
  for (item in handleliste) {
    sum += Number(handleliste[item][1])*Number(handleliste[item][2]);
  }
  totalsum.innerHTML = 'Totalsummen er '+sum+' kr.';
}
updateHTML();
