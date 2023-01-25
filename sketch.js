const ball_count = 100;
const ball_array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < ball_count; i++) {
    let new_ball = new Pelota();
    ball_array.push(new_ball);
  }
}

function draw() {
  background(255, 10);
  for (let i = 0; i < ball_count; i++) {
    ball_array[i].display();
    ball_array[i].update();
  }
}
