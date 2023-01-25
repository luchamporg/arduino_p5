let ball1;
let ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Pelota();
  ball2 = new Pelota();
}

function draw() {
  ball1.update();
  ball1.display();

  ball2.update();
  ball2.display();

  //print(ball1.pos);
}
