let song;
let mFFT;

function preload() {
  song = loadSound("../assets/epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  mFFT = new p5.FFT(0.8, 16);
}

function draw() {
  background(220, 60);

  // must call this before getting energy
  let spectrum = mFFT.analyze();

  beginShape();
  for (let idx = 0; idx < spectrum.length; idx++) {
    let x = map(idx, 0, spectrum.length - 1, 0, width);
    let y = height / 2 + map(spectrum[idx], 0, 255, 0, -height / 2);
    vertex(x, y);
  }
  endShape();

  for (let idx = 0; idx < spectrum.length; idx++) {
    let x = map(idx, 0, spectrum.length - 1, 0, width);
    let w = width / spectrum.length;
    let h = map(spectrum[idx], 0, 255, 0, height / 2);
    let y = height / 2;
    rect(x, y, w, h);
  }
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
