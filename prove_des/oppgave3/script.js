var span = document.querySelector('#span');


var svar;
//sjekker hvilke verdier mellom 0 og 10 som sammen blir 7, hvis du verdier blir sju sammen sendes verdiene til minus() for sjekk nummer to
function pluss() {
  for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 10; y++) {
      if (x+y == 7) {
        if (minus(x,y)) {
          print()
        }
      }
    }
  }
}
//sjekker om forskjellen mellom to tall sendt fra pluss() er 3, hvis sant settes x og y verdier lik svaret og funskjonen stopper
function minus(x,y) {
  if (x-y == 3) {
    svar = 'x = '+x+' og y = '+y;
    return true;
  }
}

function print() {
  span.innerHTML = svar;
}
pluss();
