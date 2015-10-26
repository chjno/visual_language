h = 0;
s = 100;
b = 100;


function setup() {
  createCanvas(1000, 600);
  background('green');
}

function draw() {
  colorMode(HSB);
  for (var i = 0; i < 4; i++) {
    fill(h + i * 90, s, b);
    rect(450 + i * 120, 20, 100, 140, 5);
  }
}