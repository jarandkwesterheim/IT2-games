var hytteNavnArr = [];
hytteNavnArr[0] = 'Gjendesheim';
hytteNavnArr[1] = 'Glitterheim';
hytteNavnArr[2] = 'Memerubu';
hytteNavnArr[3] = 'Gjendebu';
hytteNavnArr[4] = 'Leirvassbu';
hytteNavnArr[5] = 'Spiterstulen';
hytteNavnArr[6] = 'Olavsbu';

var hytteAvstandArr = [];
hytteAvstandArr[0] = [0,22,14,0,0,0,0];
hytteAvstandArr[1] = [22,0,18,0,0,17,0];
hytteAvstandArr[2] = [14,18,0,10,0,0,0];
hytteAvstandArr[3] = [0,0,10,0,19,24,16];
hytteAvstandArr[4] = [0,0,0,19,0,15,11];
hytteAvstandArr[5] = [0,17,0,24,15,0,0];
hytteAvstandArr[6] = [0,0,0,16,11,0,0];


var btn = document.querySelector('#btn')
var targetTemp = document.querySelector('.target--temp')
var valgbox = document.querySelector('.valgbox');
let count = 1;


btn.onclick = function() {
  setUpNextChoice();
}
targetTemp.onclick = function (e) {
  console.log(e.target);
}


function setUpFirstChoice() {
  genNewValgbox(count)
  for (var item in hytteNavnArr) {
    genValg(item)
  }
}


function setUpNextChoice() {
  genNewValgbox(count)
  findAvValg();
  count++;
}


function genNewValgbox(i) {
  targetTemp.innerHTML += '<div class="valgbox" alt="'+i+'" id="valgNr'+i+'"></div>';
}


function genValg(item) {
  var target = document.querySelector('#valgNr'+count)
  target.innerHTML += '<button type="checkbox" alt="'+item+'" >'+hytteNavnArr[item]+'</button>';
}


function findAvValg() {
  for (var item in hytteNavnArr) {
    if (hytteAvstandArr[item] !== 0) {
      genValg(item);
    }
  }
}
