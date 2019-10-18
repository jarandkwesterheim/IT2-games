
var epler = 7;
var bananer = 1;

//Hvis ant epler > 6 og ant bananer > 10  --> "vi har mye frukt"
//Hvis ant epler > 3 og ant bananer > 5  --> "vi må snart kjøpe mer frukt"
//Ellers  --> "kjøp mer frukt"

if (epler > 6 && bananer > 10) {
  document.write("vi har mye frukt");
} else if (epler > 3 && bananer > 5) {
  document.write("vi må snart kjøpe mer frukt");
} else {
  document.write("kjøp mer frukt");
}
//
//logisk Eller || (option + 7)
if (epler > 5 || bananer > 5) {
  document.write("<br>vi har nok frukt");
}
