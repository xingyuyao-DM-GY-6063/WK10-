class Blinky {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visible = false;
    this.period = random(100, 1000);
    this.changed = 0;
    this.diam = 50;
    this.mocolor = color(random(20,50), random(20,50), random(150,255));
    this.mouseOver = false;
  }

  update() {
    if (millis() - this.changed > this.period) {
      this.visible = !this.visible;
      this.changed = millis();
    }
    this.mouseOver = dist(mouseX, mouseY, this.x, this.y) < (this.diam / 2);
  }

  draw() {
    if (this.visible || this.mouseOver) {
      if (this.mouseOver) {
        fill(this.mocolor);
      } else {
        fill(255);
      }
      ellipse(this.x, this.y, this.diam);
    }
  }
}
