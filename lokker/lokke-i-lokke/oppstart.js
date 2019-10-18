//løkke i løkke eller dobbel froløkke
//en løkke inni en annen løjje
for(var i = 0; i<2; i++){
  for(var j = 0; j < 3; j++){
    document.write("<br>i: "+i+" j: "+j);
  }
}


//den lille gangetabellen
var produkt;
for(var faktor1 = 1; faktor1 <= 10; faktor1++){
  console.log("gangetabellen for "+faktor1);
  for(var faktor2 = 1; faktor2 <= 10; faktor2++){
    produkt = faktor1*faktor2;
    console.log(produkt);
  }
}
