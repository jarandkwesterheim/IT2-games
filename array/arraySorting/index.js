var array = [];

function genArray() {
  array = [];
  for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random()*100)+1;
  }
  console.log(array);
  sortArray();
}
function sortArray() {
  array.sort(function(a, b){return a - b});
  console.log(array);
}
genArray();
