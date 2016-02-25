function lonely() {
  colorMode(RGB);
  fill(207, 209, 199);
  rect(400, 240, 200, 120);

  push();
  colorMode(HSB);
  for (var i = 403; i < 597; i++) {
    var blu = map(i, 403, 597, 100, 10);
    stroke(226, blu, 99);
    line(i, 243, i, 263);
  }
  pop();

  // prompt text
  fill(255);
  textFont('Tahoma');
  text('Solitary', 405, 257);

  fill(0);
  strokeWeight(0.1);
  text('Are you lonesome?', 460, 300);


  // x
  strokeWeight(1);
  fill(207, 209, 199);
  rect(578, 246, 15, 15);
  
  fill(172, 173, 166);
  push();
  textSize(16);
  text('x',582,258);
  pop();
  
  // triangle
  fill(243,224,6);
  triangle(415,310,445,310, 430,280);
  fill(0);
  push();
  textSize(24);
  text('!',426,306);
  pop();

  // buttons
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(415, 325, 80, 20);

  strokeWeight(1);
  rect(505, 325, 80, 20);

  // button text
  fill(0);
  strokeWeight(0.1);
  text('Yes', 445, 340);

  fill(172, 173, 166);
  text('No', 535, 340);
}
