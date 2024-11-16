let song;
let mAmplitude;

function preload() {
  song = loadSound("../assets/epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mAmplitude = new p5.Amplitude();
}
  
function draw() {
  background(220, 10);
  let vol = mAmplitude.getLevel();

  let diam = map(vol, 0, 1, 0, 1.4 * width);
  let sat = map(vol, 0, 1, 55, 255);

  let c = color(0, 0, sat, sat);

  fill(c);
  ellipse(width / 2, height / 2, diam);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
