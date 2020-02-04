var target = document.querySelector('.target');
var belop = 500;


function genBtn() {
  target.innerHTML = '<p>Ditt beløp er '+belop+'kr. Velg rabatt under:</p><br>';
  target.innerHTML += `
  <input type="radio" name="gr1" value="0.8"> 20% rabatt
  <input type="radio" name="gr1" value="0.5"> 50% rabatt
  `
}

function addDiscount(evt) {
  belop = evt.value*belop;
  target.innerHTML += '<p>'+belop+'</p>';
}



genBtn();
