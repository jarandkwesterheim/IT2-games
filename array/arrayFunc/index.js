var landliste = ["NORGE", "SVERIGE", "DANMARK", "USA", "ENGLAND"];

document.write(landliste +"<br>");


landliste.push("ISLAND"); //legger til "island" på slutten
document.write(landliste +"<br>");

landliste.shift(); // fjerner den første
document.write(landliste +"<br>");

landliste.splice(2,1); // fjerner den 2. så 1 element
document.write(landliste +"<br>");

landliste.reverse(); //snur på hode
document.write(landliste +"<br>");

landliste.sort(); //sorterer etter verdi, i dette tilfellet alfabetisk rekkefølge, forskjell på små og store bokstaver
document.write(landliste +"<br>");

var joined = landliste.join("<br>"); // gjør hele arrayen om til 1 string, putter "<br>" mellom hvert element
document.write(joined); //["NORGE", "SVERIGE", "DANMARK", "USA", "ENGLAND"] --> ["NORGE <br> SVERIGE <br> DANMARK <br> USA <br> ENGLAND"]
