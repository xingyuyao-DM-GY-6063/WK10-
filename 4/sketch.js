class Movey {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.rad = random(15, 25);
    this.mocolor = color(random(20, 50), random(20, 50), random(150, 255));
    
    // play pre-loaded sound
    let bloopIdx = floor(random(bloops.length));
    bloops[bloopIdx].play();

    // use same file to create a sound object for this Movey
    this.bloop = loadSound(bloops[bloopIdx].url);

    // make sure it doesn't play multiple times per overlap to avoid buzzzz sound
    this.bloop.playMode("untilDone");
  }

  // return true/false telling if this circle is overlapping with specific other circle
  overlap(other) {
    // can't overlap with myself
    if (other == this) {
      return false;
    }
    let dist = p5.Vector.dist(this.pos, other.pos);
    return dist < (this.rad + other.rad);
  }

  updateAndDraw(others) {
    this.pos.add(this.vel);

    if (this.pos.x > width - this.rad || this.pos.x < this.rad) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.rad || this.pos.y < this.rad) {
      this.vel.y *= -1;
    }

    let overlapping = false;

    for (let idx = 0; idx < others.length; idx++) {
      // this accumulates overlaps.
      // ends true if any of them is true
      overlapping |= this.overlap(others[idx]);
    }

    if (overlapping) {
      fill(this.mocolor);
      this.bloop.play();
    } else {
      fill(255);
    }

    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let moves = [];
let bloops = [];

function preload() {
  bloops.push(loadSound("../assets/bloop-0.mp3"));
  bloops.push(loadSound("../assets/bloop-1.mp3"));
  bloops.push(loadSound("../assets/bloop-2.mp3"));
  bloops.push(loadSound("../assets/bloop-3.mp3"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < moves.length; idx++) {
    let mMove = moves[idx];
    mMove.updateAndDraw(moves);
  }
}

function mousePressed() {
  moves.push(new Movey(mouseX, mouseY));
}

function keyPressed() {
  moves.push(new Movey(width/2, height/2));
}
