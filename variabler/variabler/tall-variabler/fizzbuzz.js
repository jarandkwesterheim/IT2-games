/*
var a = 0;

fizbuzz();
function fizbuzz() {
  if (a<=999) {
    if (a/3=0) {
      document.write("Fiz" +"<br>");
      a++;
      fizbuzz();
    } else {
      if (a/5=0) {
        document.write("Buzz" +"<br>");
        a++;
        fizbuzz();
      } else {
        document.write(a +"<br>");
        a++;
        fizbuzz();
      }
    }
  }
  else {
    document.write("done");
  }
}
*//*
var a=1;
fizzbuzz();

function fizzbuzz() {
  if ((a % 3 == 0) && (a % 5 ==0)) {
    document.write("FizzBuzz <br>");
    a++;
    fizzbuzz();
  } else if (a % 3 == 0) {
    document.write("Fizz <br>");
    a++;
    fizzbuzz();
  } else if (a % 5 == 0) {
    document.write("Buzz <br>"),
    a++;
    fizzbuzz();
  } else if (a<=999) {
    document.write(a +"<br>");
    a++;
    fizzbuzz();
  } else {
    document.write("done");
  }
}*/
for (var i = 1; i <= 100; i++) {
  var output = "";
  if (i%3==0) { output += "Fizz"};
  if (i%5==0) { output += "Buzz"};
  if (output == "") { output += i};
  document.write(output+"<br>");
}
