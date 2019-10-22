var countryArray = [
  "Norway",
  "Sweden",
  "Denmark",
  "Britain"
]
document.write(countryArray+"<br>");
document.write(countryArray[3]+"<br>");
countryArray[0] = "Frankrike";
document.write("indeks " +countryArray.indexOf("Sweden"));
document.write("indeks " +countryArray.indexOf("BJ"));
