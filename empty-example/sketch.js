let bg;
let raven;
let obstacle;
let bird;
let pipes = [];
let score = 0;
let soundClassifier;
function preload() {
    soundClassifier = ml5.soundClassifier(
        'SpeechCommands18w',
        {probabilityThreshold: 0.95}
    );
    bg = loadImage('./bhutan.jpg');
    raven = loadImage('./raven.png');
    obstacle = loadImage('./pipe.png');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    soundClassifier.classify(gotResults);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(51);
    this.x = -1500;
    image(bg, this.x, 70, bg.width, bg.height - 20);

    bird.show();
    bird.update();

    if (frameCount % 100 === 0) {
        pipes.push(new Pipe());
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();

        pipes[i].update();
        if (pipes[i].x < (-pipes[i].width)) {
            pipes.splice(i, 1); //To remove the pipe that goes off the screen;
        }
        if (!pipes[i].hits(bird)) {
            textSize(32);
            score++;
            text("score:" + score, 0, 50);
            fill(255);

        } else {
            textSize(64);
            textAlign(CENTER, CENTER);
            text("Your Score: " + score, innerWidth / 2, innerHeight / 3);
            text('GAMEOVER :(', innerWidth / 2, innerHeight / 2);
            textAlign(LEFT, BASELINE);

            noLoop();
        }
    }
}

function keyPressed() {
    if (key === " ") {
        bird.up();
    }
}
function gotResults(error, result){
    if(error){
        console.error("Something went wrong");
    }
    if(result[0].label === "up"){
        bird.up();
        bird.up();
    }
}