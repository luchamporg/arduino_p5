let n = 45.3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10000; i++) {
    n *= 1.001;
    print(n);
  }
  print("Se terminó el loop");
}

function draw() {}
