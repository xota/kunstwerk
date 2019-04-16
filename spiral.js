breedte = 400;
maat = breedte;
xpos = breedte / 2;
ypos = breedte / 2;
factor = 1.618;

function setup() {
  createCanvas(breedte, breedte);
  noFill();
  background(220);
  noLoop();

}

function draw() {
  for(teller = 0; maat > 3; teller++) {
  	arc(xpos, ypos, maat, maat, 0, PI);
    maat /= factor;
    xpos += maat/factor;
  	arc(xpos, ypos, maat, maat, PI, 0);
    maat /= factor;
    xpos -= maat*factor;
 }
}
