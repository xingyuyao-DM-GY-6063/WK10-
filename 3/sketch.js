let bloops = [];

function preload() {
  bloops.push(loadSound("../assets/bloop-0.mp3"));
  bloops.push(loadSound("../assets/bloop-1.mp3"));
  bloops.push(loadSound("../assets/bloop-2.mp3"));
  bloops.push(loadSound("../assets/bloop-3.mp3"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  let mBloop = random(bloops);
  mBloop.play();
}
