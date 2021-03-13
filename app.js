var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

//water
context.beginPath();
//context.moveTo(0,300);
//context.lineTo(400,300);
context.rect(0,300,400,300);
context.stroke();
context.fillStyle="blue";
context.strokeStyle="blue";
context.fill();
context.stroke()

//sail
context.beginPath();
context.moveTo(155,150);
context.lineTo(220,270);
context.lineTo(90,270);
context.lineTo(155,150);
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke();


//flag
context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.closePath();
context.fillStyle="red";
context.strokeStyle="red";
context.fill();
context.stroke();

//bottom
context.rect(70,280,170,40);
context.fillStyle="brown";
context.strokeStyle="brown";
context.fill();
context.stroke();

//mast
context.rect(150,100,10,180);
context.fillStyle="black";
context.strokeStyle="black";
context.fill();
context.stroke();

//sun
context.beginPath();
context.arc(330,70,45,0,2*Math.PI,true);
context.fillStyle="yellow";
context.strokeStyle="yellow";
context.fill();
context.stroke();


