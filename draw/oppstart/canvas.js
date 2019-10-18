var canvas = document.querySelector("#canvas");
var ctx =  canvas.getContext("2d");
ctx.fillStyle = "blue"; //fyllfarge blå
ctx.strokeStyle = "pink"; //strekfarge
ctx.lineWidth = 3; //linje bredde

ctx.fillRect(40,20,200,100); //x,y,bredde,høyde
ctx.strokeRect(40,20,200,100); //tegner strek

//tegner rette linjer
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.moveTo(40,200);
ctx.lineTo(240,400);
ctx.moveTo(40,400);
ctx.lineTo(240,200);
ctx.stroke();
