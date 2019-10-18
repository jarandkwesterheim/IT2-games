/*var minListe = document.querySelector("#minListe");
var fornavn = prompt("Skriv fornavn");
var etternavn = prompt("Skriv etternavn");
var by = prompt("Skriv bosted");
var mittBilde = document.querySelector("#mittBilde");*/
var i = Math.floor(Math.random()*3)+1
/*
minListe.innerHTML = "<li>Fornavn: "+fornavn+"</li>";
minListe.innerHTML += "<li>Etternavn "+etternavn+"</li>";
minListe.innerHTML += "<li>Bosted: "+by+"</li>";
*/
visBilde();
function visBilde() {
  if (i === 1) { mittBilde.src = "https://static-news.moneycontrol.com/static-mcnews/2019/02/Vijay-Kedia-770x433.png";
  } else if (i === 2) {
    mittBilde.src = "https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg";
  }else{
    mittBilde.src = "https://cdn.stockphotosecrets.com/wp-content/uploads/2018/08/hide-the-pain-stockphoto-840x560.jpg";
  }
}
