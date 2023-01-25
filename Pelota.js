class Pelota {
  constructor() {
    this.diam = random(20, 80);
    this.rad = this.diam / 2;
    this.pos = createVector(windowWidth / 2, windowHeight / 2);
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2, 10));
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }
  update() {
    this.vel.rotate(random(-0.2, 0.2));
    this.pos.add(this.vel);

    if (this.pos.x > windowWidth - this.rad) {
      //background(255, 20);
      this.vel.x *= -1;
    }
    if (this.pos.x < this.rad) {
      //background(255, 20);
      this.vel.x *= -1;
    }
    if (this.pos.y > windowHeight - this.rad) {
      //background(255, 20);
      this.vel.y *= -1;
    }
    if (this.pos.y < this.rad) {
      //background(255, 20);
      this.vel.y *= -1;
    }
  }
  display() {
    fill(this.color);
    stroke(255, 100, 100, 0);
    strokeWeight(10);
    circle(this.pos.x, this.pos.y, this.diam);
  }
}
