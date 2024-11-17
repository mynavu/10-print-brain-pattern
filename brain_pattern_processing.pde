float spacing = 20;
float size = 20;
color pink = #ffdbe8;
color pinkstroke = #ff8ab4;

void setup() {
  size(1040, 760);
}

void draw() {
  background(pink);
  noFill();
  strokeWeight(3);
  for (float x = 0; x < width; x += spacing) {
    for (float y = 0; y < height; y += spacing) {
      stroke(pinkstroke);
      float r = random(0, 1);
      if (r < 0.25) {
        arc(x, y, size, size, 0, HALF_PI);
        arc(x, y, size, size, PI+HALF_PI, TWO_PI);
      } else if (r < 0.5) {
        arc(x, y, size, size, 0, PI);
      } else if (r < 0.75) {
        arc(x, y, size, size, HALF_PI, PI+HALF_PI);
      } else {
        arc(x, y, size, size, PI, TWO_PI);
      }
    }
  }
  noLoop();
}
