/** effect hover dungeon ul1 */
function changeBackground(action) {
    var ul1 = document.querySelector('.dungeon.ul1');

    if (action === 'hover') {
        ul1.style.backgroundImage = "url('images/portal-dungeon.gif')";
    } else if (action === 'leave') {
        ul1.style.backgroundImage = "none";
    }
}

function changeBackground2(action) {
    var ul2 = document.querySelector('.dungeon.ul2');

    if (action === 'hover') {
        ul2.style.backgroundImage = "url('images/portal-dungeon.gif')";
    } else if (action === 'leave') {
        ul2.style.backgroundImage = "none";
    }
}

/** grafity text */
        let piliFont;

        function preload() {
            piliFont = loadFont("./js/monumentextended-ultrabold.otf");
        }

        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies; // Corrected from Matter.bodies to Matter.Bodies
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
            "Quest",
            "Dungeon",
            "Card",
            "Guild",
            "Master",
            "Traveller",
            "Crypt",
            "Quest","Dungeon",
            "Card",
            "Guild",
            "Master",
            "Traveller",
            "Crypt",
            "Quest",
        ];

        function setup() {
            createCanvas(windowWidth, windowHeight - 5);

            engine = Engine.create();

            lantai = Bodies.rectangle(width / 2, height - 20, width, 10, { // Corrected from ractangel to rectangle
                isStatic: true,
            });
            pgrkiri = Bodies.rectangle(0, height / 2, 10, height, { // Corrected from rectangel to rectangle
                isStatic: true,
            });
            pgrkanan = Bodies.rectangle(width, height / 2, 10, height, { // Corrected from rectangel to rectangle
                isStatic: true,
            });

            World.add(engine.world, [lantai, pgrkiri, pgrkanan]); // Corrected from engine.World to engine.world

            for (let i = 0; i < displayKata.length; i++) {
                katas.push(new Kata(random(width), -200, displayKata[i])); // Corrected class name from kata to Kata
            }
        }

        function draw() {
            background("#0a0809");
            Engine.update(engine);
            for (let kata of katas) {
                kata.show();
            }
        }


        class Kata { // Corrected class name from kata to Kata
            constructor(x, y, kata) {
                this.Body = Bodies.rectangle(x, y, kata.length * 20, 40); // Corrected from ractangel to rectangle
                this.kata = kata;
                World.add(engine.world, this.Body); // Corrected from engine.World to engine.world
                this.color = random(['#c9f422', '#ed89fb'])
            }

            show() {
                let pos = this.Body.position;
                let angle = this.Body.angle;

                push();
                translate(pos.x, pos.y);
                rotate(angle);
                rectMode(CENTER);
                fill("#c9d1f5");
                stroke(this.color);
                strokeWeight(3);
                rect(0, 0, this.kata.length * 40 + 80, 100, 60);
                noStroke();
                textFont(piliFont);
                fill(this.color);
                textSize(40);
                textAlign(CENTER, CENTER);
                text(this.kata.toUpperCase(), 0, 0); // Corrected from Text to text
                pop();
            }
        }

        function mouseMoved() {
            for (let kata of katas) {
                if (dist(mouseX, mouseY, kata.Body.position.x, kata.Body.position.y) < 50) {
                    Body.applyForce(
                        kata.Body,
                        { x: kata.Body.position.x, y: kata.Body.position.y },
                        { x: random(-0.2, 0.2), y: random(-0.2, 0.2) }
                    );
                }
            }
        }