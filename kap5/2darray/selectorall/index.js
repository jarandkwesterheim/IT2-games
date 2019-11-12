
var avsnittEl = document.querySelectorAll('p');
var btn = document.querySelector('#btn');

//qsAll velger alle elementene og putter dem i array
btn.onclick = function() {
  for(var element of avsnittEl) {
    if (element.className == 'gul') {
      element.className = 'rod';
    }
    else {
      element.className = 'gul';
    }
  }
}
