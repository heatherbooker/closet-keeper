$(document).ready(function() {

$('#add').click(function() {

$('#wardrobe').html('<canvas id="myCanvas" width="400" height="500"></canvas>');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

roundRect(ctx, 30, 10, 100, 30, 9, "#BCB6B6", true)

})
});

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
  	ctx.fillStyle = fill;
    ctx.fill();
  }        
}