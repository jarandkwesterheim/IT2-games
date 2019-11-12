var bilArr = [];
bilArr[0] = ['Volvo', 'BMW', 'Audi', 'Renault'];
bilArr[1] = ['Sølv', 'Navy Blue', 'Svart', 'Rød'];
bilArr[2] = ['BS78427', 'BR71564', 'EB67253', 'DK38956'];

for (var i = 0; i<4; i++) {
  document.write(bilArr[0][i]+", "+bilArr[1][i]+", "+bilArr[2][i]+"<br>");
}

document.write("<br>");


var retter = [
  ['salat','suppe','focaccia'],
  ['pasta','biff','laks','gress'],
  ['iskrem','kake']
];
retter.push(['cola','farris','MOUNTAIN DEW NIBBA','powerade for da babies'])

for (var i = 0; i < retter.length; i++) {
  var ant = retter[i].length;
  var rand = Math.floor(Math.random()*ant);
  if (i < retter.length-1) {
    document.write(retter[i][rand]+", ");
  }
  else {
    document.write(retter[i][rand]+"<br>");
  }
}

document.write("<br>"+retter[0].indexOf('suppe'));
