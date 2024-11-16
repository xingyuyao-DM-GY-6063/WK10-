// Blinky object is defined in Blinky.js

let blinks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++) {
    let mBlink = blinks[idx];
    mBlink.update();
    mBlink.draw();
  }
}

function mousePressed() {
  blinks.push(new Blinky(mouseX, mouseY));
}
