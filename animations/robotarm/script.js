var container = document.querySelector('.container');
var body = document.querySelector('.body');
var arm = document.querySelector('.arm');


var aniArm = [{transform:"rotate(-45deg)"},{transform:"rotate(45deg)"}];
var ctrlArm = {duration:400, iterations:Infinity, direction:"alternate"};

var aniCont = [{left:"100px"}, {left:"900px"}];
var ctrlCont = {duration:1500, iterations:Infinity, direction:"alternate"};


arm.animate(aniArm, ctrlArm);
container.animate(aniCont, ctrlCont);
