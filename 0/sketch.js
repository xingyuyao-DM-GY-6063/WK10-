let blinks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++){
    let mBlink = blinks[idx];
    if (millis() - mBlink.changed > mBlink.period) {
      mBlink.visible = !mBlink.visible;
      mBlink.changed = millis();
    }

    if (mBlink.visible) {
      ellipse(mBlink.x, mBlink.y, mBlink.diam);
    }
  }
}

function mousePressed() {
  blinks.push({
    x: mouseX,
    y: mouseY,
    visible: false,
    period: random(100, 1000),
    changed: 0,
    diam: 50,
  });
}
