var tallArr = [12,3,6,2,11];

tallArr.sort(sammenlignTall);

function sammenlignTall(a,b) {
  return a-b;
}

document.write(tallArr);

document.write("<br>");

var nameArr = ["Charles","anders","douglas","Beate"];

function sammenlignTekst(a,b) {
  a = a.toUpperCase();
  b = b.toUpperCase();

  if (a<b) {
    return -1;
  }
  else if (a>b) {
    return 1;
  }
  else {
    return 0;
  }
}

nameArr.sort(sammenlignTekst);
document.write(nameArr);
