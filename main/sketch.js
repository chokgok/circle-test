var x;
var y;
var d;

function setup() {
  createCanvas(400, 400);
  fill(0,0,0,0);
  x = width/2
  y = height/2
  d = width/2
}

function draw() {
  background(220);
  circle(x, y, d);
}
