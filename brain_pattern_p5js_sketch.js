const spacing = 20;
const size = 20;
const pink = '#ffdbe8';
const pinkstroke = '#ff8ab4';

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(pink);
  noFill();
  strokeWeight(3);
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      stroke(pinkstroke);
      let r = random(0, 1);
      if (r < 0.25) {
        arc(x, y, size, size, 0, HALF_PI);
        arc(x, y, size, size, PI + HALF_PI, TWO_PI);
      } else if (r < 0.5) {
        arc(x, y, size, size, 0, PI);
      } else if (r < 0.75) {
        arc(x, y, size, size, HALF_PI, PI + HALF_PI);
      } else {
        arc(x, y, size, size, PI, TWO_PI);
      }
    }
  }
  noLoop();
}