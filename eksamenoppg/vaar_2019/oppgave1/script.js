
var infoArr = [
  'Dette er et punktgrafisk bilde. Anbefalt fil er .jpg. JPG filer er en fordel å bruke på vanelige bilder da den tar liten plass og sørger for å vedlikeholde kavaliteten på bildet.',
  'Dette er et punktgrafisk bilde. Anbefalt fil er .png. PNG filer gjør det mulig å inkludere gjennomsiktige deler i bilde.',
  'Dette er et vektorgrafisk bilde. Andebalt fil er .svg. SVG filer er vektorbaserte og gjør det mulig å skalere bildet veldig uten at det mister kvaliteten.']
let info, clientY, clientX;

var container = document.querySelector('.container');
var infoBox = document.querySelector('.infoBox');

container.onclick = function (e) {
  clientX = e.clientX;
  if (clientX < 340/2) {
    clientX = 340/2;
  }
  clientY = e.clientY;
  displayInfo(e.target.alt)
}


function displayInfo(type) {
  if (infoArr[type] == undefined) {
    infoBox.innerHTML = ''
    infoBox.style = 'padding:0px'
  }
  else {
    info = infoArr[type]
    infoBox.innerHTML = '<p>'+info+'</p>';
    infoBox.style = 'position: absolute;max-width:300px;top: '+clientY+'px; left: '+clientX+'px;border:2px solid grey;border-radius: 3px;padding: 10px;background-color: white;transform: translate(-50%,0%);';
  }
}
