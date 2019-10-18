
//document.body.innerHTML ="<h1>Nytt innhold</h1>" + "<p>Det er enda finere</p>"; //printing text
function changeTxt() {
  document.getElementById("main--title").innerHTML="dette er en ny overskrift";
  document.getElementById("revert").classList.toggle("hidden");
}
function revertTxt() {
  document. getElementById("main--title").innerHTML="dette er en gammel overskrift";
  document.getElementById("revert").classList.toggle("hidden");
}
function changeImg() {
  document.getElementById("img1").src = "https://cdn.mos.cms.futurecdn.net/hUQMdecjR7kkx8nKg3VZNh-320-80.jpg";
  document.getElementById("img1").width = "500";
}
function copyTxt() {
  document.getElementById("ulik2").innerHTML = document.getElementById("ulik1").innerHTML;
}
