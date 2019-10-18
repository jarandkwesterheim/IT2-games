var target = document.querySelector(".target");
var poeng = 0;
target.innerHTML = "";

function del() {
  target.innerHTML = "";
}

function oppg1() {
  target.innerHTML = '<input id="number1" type="number" value="" placeholder="Tall 1"><input id="number2" type="number" value="" placeholder="Tall 2"><span onclick="show1()">Submit</span>'
}
function show1() {
  var n1 = document.querySelector("#number1");
  var n2 = document.querySelector("#number2");
  if (Number(n1.value )> Number(n2.value)) {
    target.innerHTML += '<br><br><p>Tall 1 er større enn Tall 2. <br>' +n1.value +' > ' +n2.value;
  } else if(Number(n2.value )> Number(n1.value)){
    target.innerHTML += '<br><br><p>Tall 2 er større enn Tall 1. <br>' +n2.value +' > ' +n1.value;
  } else{
    target.innerHTML += '<br><br><p>Tallene er like store. <br>' +n1.value +' = ' +n2.value;
  }
}

function oppg2() {
  target.innerHTML = '<input id="age" type="number" value="" placeholder="Din alder"><span onclick="show2()">Submit</span>';
}
function show2() {
  var age = document.querySelector("#age");

  if (age.value > 67) {
    target.innerHTML = '<p>Du må kjøpe honnørbillett</p>';
  } else if(age.value > 16) {
    target.innerHTML = '<p>Du må kjøpe voksenbillett</p>';
  }else if(age.value < 0) {
    target.innerHTML = '<p>stop lyin</p>';
  } else {
    target.innerHTML = '<p>Du MÅ kjøpe barnebillett</p>';
  }
}

function oppg3() {
  target.innerHTML = '<input id="shape" type="text" value="" placeholder="skriv form"><span onclick="show3()">Submit</span><br><canvas id="canvas" width="300" height="300"></canvas>';
}
function show3() {
  var shape = document.querySelector("#shape");
  var canvas = document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");

  if (shape.value === "firkant") {
    ctx.fillStyle = "green";
    ctx.fillRect(50,50,150,150);
  } else if(shape.value === "sirkel"){
    ctx.fillStyle = "orange";
    ctx.arc(150,150,100,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  } else {
    target.innerHTML = '<p>Form oppgis i <i>firkant</i> eller <i>sirkel</i></p>';
  }
}

function oppg4() {
  var btn = document.querySelector("#btn");
  target.innerHTML = '<p onclick="show4()">Kast terning</p>';
}
function show4() {
  var a = Math.floor(Math.random()*6)+1;
  var b = Math.floor(Math.random()*6)+1;
  var c = Math.floor(Math.random()*6)+1;
  var sum = a+b+c;

  target.innerHTML = '<p onclick="show4()">Kast terning</p>';
  target.innerHTML += 'tallene er:<br>' +a +' ' +b +' ' +c +'<br>Summen er: ' +sum;

  if (sum === 16) {
    target.innerHTML += '<br><br><b>Nesten der! Du har minst 1 sekser</b>';
  } else if(sum === 17){
    target.innerHTML += '<br><br><b>Nesten der! Du har minst 2 seksere</b>';
  } else if (sum === 18) {
    target.innerHTML += '<br><br><b>Gratulerer du vant! Du har 3 seksere</b>';
  } else{
    target.innerHTML += '<br><br><b>Prøv igjen!</b>';
  }
}


function oppg5() {
  target.innerHTML = '<p>Hva er hovedstaden i Norge?</p><br><input id="ans1" type="text" value="" placeholder="answer"><span onclick="check1()">Submit</span><br>'
}
function check1() {
  var ans1 = document.querySelector("#ans1");
  if (ans1.value.toLowerCase() === "oslo") {
    poeng++;
    next();
  } else {
    next();
  }
}
function next() {
  target.innerHTML = '<p>Hvilken by burde være hovedstaden i Norge?</p><br><input id="ans2" type="text" value="" placeholder="answer 2"><span onclick="check2()">Submit</span><br><p>Dine poeng: ' +poeng;
}
function check2() {
  var ans2 = document.querySelector("#ans2");
  if (ans2.value.toLowerCase() === "ikke bergen i hvertfall") {
    poeng++;
    result();
  } else {
    result();
  }
}

function result() {
  target.innerHTML = '<b>Ditt resultat er: ' +poeng +'/2';
}
function oppg6() {
  target.innerHTML = '<p>Skriv inn et tall:</p><input id="gjettTall" type="number" value=""><span onclick="show6()">Submit</span><br>';
}
function show6() {
  var inp = document.querySelector("#gjettTall");
  var i = Math.floor(Math.random()*6+1);
  target.innerHTML = '<p>Skriv inn et tall:</p><input id="gjettTall" type="number" value=""><span onclick="show6()">Submit</span><br>';
  if (i === Number(inp.value)) {
    target.innerHTML += '<p>Ja du gjettet riktig. Du gjettet: ' +inp.value +', tallet var: ' +i;
  } else {
    target.innerHTML += '<p>Nei, du gjettet feil. Du gjettet: ' +inp.value +', tallet var: ' +i;
  }
}


function oppg7() {
  target.innerHTML = '<p>Er du mann eller kvinne?</p><br><span onclick="btnMann()">Mann</span><br><span onclick="btnKvinne()">Kvinne</span>';
}
function btnMann() {
  target.innerHTML = '<p>Hvor gammel er du?</p><br><input id="inpAlderMann" type="number" value=""><span onclick="checkMann()">Submit</span>'
}
function checkMann() {
  var alder = document.querySelector("#inpAlderMann");
  if (Number(alder.value) >=16 && Number(alder.value <=18)) {
    godkjent();
  } else {
    ikkeGodkjent();
  }
}
function btnKvinne() {
  target.innerHTML = '<p>Hvor gammel er du?</p><br><input id="inpAlderKvinne" type="number" value=""><br><br><p>Hvor høy er du?</p><input id="inpHoydeKvinne" type="number" value=""><span onclick="checkKvinne()">Submit</span>'
}
function checkKvinne() {
  var alder = document.querySelector("#inpAlderKvinne");
  var hoyde = document.querySelector("#inpHoydeKvinne")
  if (Number(alder.value) === 25 && Number(hoyde.value) >= 190) {
    godkjent();
  } else {
    ikkeGodkjent();
  }
}

function godkjent() {
  target.innerHTML = '<p>Gratulerer du er med i organisasjonen!</p>';
}
function ikkeGodkjent() {
  target.innerHTML = '<p>Beklager du kan ikke være med</p>';
}
