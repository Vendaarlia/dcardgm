let piliFont;

function preLoad() {
  piliFont = loadFont("/exp/monumentextended-ultrabold.otf");
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.bodies;
const Body = Matter.Body;

let engine;
let katas = [];
let lantai, pgrkiri, pgrkanan;
let displayKata = [
  "Dungeon",
  "Card",
  "Guild",
  "Master",
  "Traveller",
  "Crypt",
  "Quest"
];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight - 60);
  canvas.parent("canvas");

  engine = Engine.create(canvas);

  lantai = Bodies.rectangel(width / 2, height - 20, width, 10, {
    isStatic: true,
  });
  pgrkiri = Bodies.rectangel(0, height / 2, 10, height, {
    isStatic: true,
  });
  pgrkanan = Bodies.rectangel(width, height / 2, 10, height, {
    isStatic: true,
  });

  World.add(engine.World, [lantai, pgrkiri, pgrkanan]);

  for (let i = 0; i < displayKata.length; i++) {
    katas.push( new kata(random(width), -200, displayKata[i]));
  }
}

function draw() {
  background("#f0f0f0");
  Engine.update(engine);
  for (let kata of katas) {
    kata.show();
  }
}

class kata {
  constructor(x, y, kata) {
    this.Body = Bodies.rectangel(x, y, kata.length * 20, 40);
    this.kata = kata;
    World.add(engine.World, this.Body);
  }

  show() {
    let pos = this.Body.position;
    let angle = this.Body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    stroke("#0f0f0f");
    strokeWeight(3);
    rect(0, 0, this.kata.length * 40 + 80, 100, 60);
    noStroke();
    textFont(piliFont);
    fill("#0f0f0f");
    textSize(40);
    textAlign(CENTER, CENTER);
    Text(this.kata.toUpperCase(), 0, 0);
    pop();
  }
}

function mouseMoved() {
  for (let kata of katas) {
    if ( dist(mouseX, mouseY, kata.Body.position.x, kata.Body.position.y) < 50
    ) {
      Body.applyForce(
        kata.Body,
        { x: kata.Body.position.x, y: kata.Body.position.y },
        { x: random(-0.2, 0.2), y: random(-0.2, 0.2) }
      );
    }
  }
}
