var h = 0;
var s = 100;
var b = 100;
var cardW = 100;
var cardH = 140;
var cardR = 5;
var cardX;
var cardY = 20;
var gravity = 1;
var speedX = 0;
var speedY = 0;
var origins = [450, 570, 690, 810];
var index = 0;
increasing = true;
cardCount = 0;

function preload() {
  face = loadImage('face.png');
}

function setup() {
  createCanvas(1000, 600);
  background('green');
  colorMode(HSB);
  
  h = random(0,360);
  
  // chino card
  fill(32, 23, 94);
  rect(80, 20, cardW, cardH, cardR);
  image(face, 91, 70);

  // starting cards
  for (var i = 0; i < 4; i++) {
    fill(0 + i * 90, s, b);
    rect(450 + i * 120, 20, cardW, cardH, cardR);
  }
}

cardX = 450;
speedX = 5;
speedY = -1;

function draw() {
  if (increasing) {
    b++
  } else {
    b--
  }
  if (b > 100) {
    increasing = false;
  } else if (b < 0) {
    increasing = true;
  }

  fill(h, s, b);
  rect(cardX, cardY, 100, 140, 5);
  cardX += speedX;
  cardY += speedY;
  speedY += gravity;
  if (cardY + 140 > height) {
    cardY = height - 140;
    speedY *= -0.8;
  }
  if (cardX > width || cardX + cardW < 0) {
    index++;
        cardCount++;
    if (cardCount == 52) {
      background('green');
      lonely();
      noLoop();
    }
    if (index > 3) {
      index = 0;
    }
    speedX = random(-12, 6);
    while (speedX > -2 && speedX < 2) {
      speedX = random(-12, 6);
    }
    cardX = origins[index];
    cardY = 20;

  }
}