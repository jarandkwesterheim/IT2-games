/*
var input1 = prompt("Skriv et tall");
var input2 = prompt("Skriv et nytt tall");
var sum = Number(input1) + Number(input2);
document.write("Summen er " +sum);
*/
//matematiske operatorer: Vanlige tegn
//+ er pluss, - er minus, * er gange, / er dele
var tall1 = 2+3;//tall1 er 5

var tall2 = tall1/3;//tall2 er
document.write("tall1 er " +tall1 +" tall2 er " +tall2 +"<br>");

//med 2 desimaler
document.write("tall1 er " +tall1 +" tall2 er " +tall2.toFixed(2));

var a = 3;
a = a + 1; // a øker med 1, a er 4
a++;//betyr a +1, a er nå 5

a = a - 1; //a reduseres med 1, a er nå 4
a--; //betyr a -1 a er nå 3

a+=3;//a øker med 3 og er nå 6

var b = 2;
a+=b;//legger til b til a, a er nå 8

a-=5 //a reduseres med 5, a er nå 3


document.write("<br>verdien av a er nå " +a);

//pi
document.write("pi = " +Math.PI.toFixed(5));
