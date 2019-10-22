var myValue = 5; //global variable


function addOne() {
  var myValue = 3; //local variable
  myValue = myValue +1; //adds one to local variable
  this.myValue = myValue + 1; //this.myValue points to the global variable
}
addOne();


document.write(myValue);
