var inputArr = [];
var letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9];
function generateInps() {
    for(var i = 0; i < 7; i++) {
    var int = Math.floor(Math.random()*62);
    inputArr[i] =  letterArr[int]
    }
  console.log(inputArr);
}
function fillLink() {
  var link = "https://datdrop.com/battle/";
  for(var i = 0; i < 3; i++) {
    link += inputArr[i];
  }
  link += "2";
  for(var i = 3; i < 7; i++) {
    link += inputArr[i];
  }
  link += "f/invite";
  console.log(link);
  window.location.href = link;
}
function giblink() {
  generateInps();
  fillLink();
};
