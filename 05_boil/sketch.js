var bubbles = [];
var bubble;

function setup() {
  createCanvas(500, 300);
  for (i = 0; i < 30; i++) {
    var bubble = {
      x: random(210, 270),
      a: 0, //this.x - 240,
      b: 0, //((1600 - this.a ^ 2) ^ (0.5)),
      y: 0, //random(170 - this.b, 170 + this.b),
      r: random(0,10),
      coords: function() {
        this.a = int(this.x - 240);
        this.b = pow(900 - pow(this.a, 2), 0.5);
        this.y = random(170 - this.b, 170 + this.b);
      },
      display: function() {
        // var a = int(this.x - 240);
        // var b = pow(1600 - pow(a, 2), 0.5);
        // var y = random(170 - b, 170 + b);
        strokeWeight(1);
        noFill();
        // fill(0,0,255,100);
        stroke(0, 0, 255);
        ellipse(this.x, this.y, this.r, this.r);
      },
      move: function() {
        this.r += 0.5;
        if (this.r > 10) {
          this.r = 0;
          this.x = random(200, 280);
        }
      }
    };
    
    bubbles.push(bubble);
    for (i = 0; i < bubbles.length; i++) {
      bubbles[i].coords();
    }
    
  }
}

function draw() {
  background(255);
  strokeWeight(6);
  ellipse(240,170,135,50);
  fill(255);
  ellipse(240,170,100,100);

  for (i = 0; i < bubbles.length; i++) {
    // bubbles[i].coords();
    bubbles[i].display();
    bubbles[i].move();
  }

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(200);
  textFont();
  text('B   i l', 250, 150);
  fill(0,0,255,100);
  strokeWeight(15);
  stroke(0);
  ellipse(240, 170, 100, 100);
}