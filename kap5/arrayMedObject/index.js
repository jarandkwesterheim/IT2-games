var personinfo = [
  {
    fornavn:"Donald",
    etternavn:"Duck",
    alder:85
  },
  {
    fornavn:"Dolly",
    etternavn:"Duck",
    alder:82
  },
  {
    fornavn:"Mikke",
    etternavn:"Mus",
    alder:91
  },
  {
    fornavn:"Petter",
    etternavn:"Smart",
    alder:96
  }
]

//legge til
personinfo.push({
  fornavn:"Hetti",
  etternavn:"Duck",
  alder:45
})


var lengde = personinfo.length;
personinfo[lengde] = {
  fornavn:"Onkel",
  etternavn:"Skrue",
  alder:172
}

function skrivUt() {
  document.write("<br>");
  for (var navn of personinfo) {
    document.write(navn.fornavn+" "+navn.etternavn+", alder: "+navn.alder+" år<br>");
  }
}
skrivUt();




//sortering på alder
personinfo.sort(sammenlignTall);

function sammenlignTall(a,b) {
  return a.alder - b.alder;
}
skrivUt();



//sortering på navn
personinfo.sort(sammenlignNavn);

function sammenlignNavn(a,b) {
  a = a.fornavn.toLowerCase();
  b = b.fornavn.toLowerCase();

  if (a<b) {//hvis a er mindre en b vil b komme foran
    return -1;
  }
  else if (a>b) {//hvis a er størr en b vil a komme foran
    return 1;
  }
  else {//hvis begge er like vil det ikke skje noe
    return 0;
  }
}
skrivUt();
