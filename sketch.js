w = 600;
h = 400;
d = 20; //diameter

function setup() {
  createCanvas(w, h);
  frameRate(0.5);
}

function draw() {
  background(220);
  stroke(255, 0, 0);
  for (i = 0; d * i < width; i++) {
    for (j = 0; d * j < height; j++) {
      if (random(10) < 5) {
        line(d * i, d * j, d + d * i, d + d * j);
      } else {
        line(d * i, d + d * j, d + d * i, d * j);
      }
    }
  }
}
