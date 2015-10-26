function Bubble() {
  this.x = random(200, 280);
  this.a = this.x - 240;
  this.b = pow(1600 - pow(this.a, 2), 0.5);
  this.y = random(170 - this.b, 170 + this.b);
  this.r = random(0, 10);

  this.display = function() {
      strokeWeight(1);
      noFill();
      stroke(0, 0, 255);
      ellipse(this.x, this.y, this.r, this.r);
    },
    this.move = function() {
      this.r += 0.5;
      if (this.r > 10) {
        this.r = 0;
        this.x = random(200, 280);
        this.a = this.x - 240;
        this.b = pow(1600 - pow(this.a, 2), 0.5);
        this.y = random(170 - this.b, 170 + this.b);
      }
    }
}

bubbles.push(bubble);
for (i = 0; i < bubbles.length; i++) {
  bubbles[i].coords();
}