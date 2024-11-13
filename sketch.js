let posicaoVertical;

function setup() {
  createCanvas(500, 500);
  posicaoVertical = 250;
}

function draw() {
  if (posicaoVerdical < 400) {
    background("lightblue");
    posicaoVerdical = posicaoVerdical + 1;
  }
  fill("orange");
  background;
  circle(250, posicaoVErdical, 300);
  fill("#2007FF");
  rect(0, 250, 500, 350);
  fill("#FFC107");
  rect(0, 400, 500, 100);
}