var quiz = [];
quiz[0] = {
  spm:"Hva er hovedstaden i Norge?",
  alt1:"Norge",
  alt2:"Oslo",
  alt3:"Stockholm",
  alt4:"Britland",
  svr:2
};
quiz[1] = {
  spm:"Hva faen?",
  alt1:"jebal",
  alt2:"abc",
  alt3:"mertin",
  alt4:"Mikko Pasanen",
  svr:3
};
quiz[2] = {
  spm:"Hvor mange GigaBytes er det i en TerraByte?",
  alt1:"100 000",
  alt2:"1000",
  alt3:"1024",
  alt4:"64 000",
  svr:3
};
quiz[3] = {
  spm:"Hva er mellomnavnet til Harry S. Truman?",
  alt1:"Steinar",
  alt2:"Ingenting",
  alt3:"Scott",
  alt4:"Peter",
  svr:2
};
quiz[4] = {
  spm:"Hvor mange iq er det å leie?",
  alt1:"2",
  alt2:"5",
  alt3:"11",
  alt4:"23",
  svr:4
};

let checked;
var crntSpm = 0;
var points = 0;
var spm = document.querySelector('.spm-box');
var ans = document.querySelector('.ans-box');
var neste = document.querySelector('.neste-btn');
var infoCrntSpm = document.querySelector('#span--crntSpm');
var infoTotalSpm = document.querySelector('#span--totalSpm');
var infoCrntPoints = document.querySelector('#span--crntPoints');


function genSpm() {
  spm.innerHTML = '<h1>'+quiz[crntSpm].spm+'</h1>'
}
function genAnwers() {
  ans.innerHTML = '<button type="button" value="1" class="btn red" name="button">'+quiz[crntSpm].alt1+'</button>';
  ans.innerHTML += '<button type="button" value="2" class="btn blue" name="button">'+quiz[crntSpm].alt2+'</button>';
  ans.innerHTML += '<button type="button" value="3" class="btn green" name="button">'+quiz[crntSpm].alt3+'</button>';
  ans.innerHTML += '<button type="button" value="4" class="btn yellow" name="button">'+quiz[crntSpm].alt4+'</button>';
}
function updateInfo() {
  infoCrntSpm.innerHTML = crntSpm+1;
  infoTotalSpm.innerHTML = quiz.length;
  infoCrntPoints.innerHTML = points;
}


function clicked(evt) {
  if (evt.target.value == quiz[crntSpm].svr) {
    points++;
  }
  checked = true;
}
neste.onclick = function() {
  if (checked) {
    if (crntSpm < quiz.length) {
      crntSpm++;
      loadNew();
    }
  }
}


function loadNew() {
  genSpm(crntSpm);
  genAnwers(crntSpm)
  updateInfo(crntSpm)



  //listen for click
  ans.onclick = clicked;
}
loadNew();
