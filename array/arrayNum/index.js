var tallArr = [12,9,7,14,2];
var max = tallArr[0];

//function to print array
function print() {
  for (var i = 0; i < tallArr.length; i++) {
    if (tallArr[i] > max) {
      max = tallArr[i];
    }
  }
  document.write(max);
}
print();
