let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = 'red';
context.fillRect(200, 300, 300, 250);
context.beginPath();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.moveTo(200, 300);
context.lineTo(350, 150);
context.lineTo(420, 220);
context.moveTo(450, 250);
context.lineTo(500, 300);
context.stroke();
context.closePath();
context.fillStyle = 'black';
context.fillRect(220, 350, 100, 50);
context.fillRect(380, 350, 100, 50);
context.fillRect(380, 450, 100, 50);
context.strokeRect(230, 439, 70, 110);
context.beginPath();
context.lineWidth = 3;
context.strokeStyle = 'black'
context.moveTo(265, 439);
context.lineTo(265, 550);
context.moveTo(421, 260);
context.lineTo(421, 195);
context.lineTo(450, 195);
context.lineTo(450, 260);
context.moveTo(421, 210);
context.lineTo(450, 210);
context.stroke();
context.closePath();
context.beginPath();
context.strokeStyle = 'red';
context.moveTo(220, 375);
context.lineTo(320, 375);
context.moveTo(380, 375);
context.lineTo(480, 375);
context.moveTo(380, 475);
context.lineTo(480, 475);
context.moveTo(270, 350);
context.lineTo(270, 400);
context.moveTo(430, 350);
context.lineTo(430, 400);
context.moveTo(430, 450);
context.lineTo(430, 500);
context.stroke();
context.closePath();