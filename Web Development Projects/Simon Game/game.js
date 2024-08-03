// Initialize variables
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameActive = false;
var originalH1 = $("h1").text();

/**
 * Plays the next sequence in the simon game. Function is marked as async since it sleeps (taking time) to show the pattern.
 */
async function nextSequence() {
    $("h1").text("Level: " + level);
    await sleep(1000);
    level++;
    userClickedPattern = [];
    var randomColor = buttonColors[randomNumberGenerator()];
    gamePattern.push(randomColor);
    for (var i=0; i<gamePattern.length; i++) { 
        playSound(gamePattern[i]);
        $("." + gamePattern[i]).addClass("flash");
        setTimeout(function() {
            $("." + gamePattern[i]).removeClass("flash");
        }, 100);
        await sleep(500);
    }
}

/**
 * Gets random number between 0-3 (inclusive)
 */
function randomNumberGenerator() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

/**
 * Plays a corresponding sound to a color
 */
function playSound(randomColor) {
    switch (randomColor) {
        case "green":
            var g = new Audio("./sounds/green.mp3");
            g.play();
            break;
        case "red":
            var r = new Audio("./sounds/red.mp3");
            r.play();
            break;
        case "yellow":
            var y = new Audio("./sounds/yellow.mp3");
            y.play();
            break;
        case "blue":
            var b = new Audio("./sounds/blue.mp3");
            b.play();
            break;
        default: console.log(randomColor);
            break;
    }
}

// Reacts to a click
$(".btn").on("click", function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    compareArrays();
});

/**
 * Compares arrays gamePattern and userClickedPattern to see if they match.
 */
function compareArrays() {
    if (userClickedPattern.length === gamePattern.length) {
        if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
            nextSequence();
        }
        else {
            gameOver();
        }
    }
    else {
        for (var i=0; i < userClickedPattern.length; i++) {
            if (userClickedPattern[i] !== gamePattern[i]) {
                gameOver();
            }
        }
    }
}

/**
 * Animates a button press
 */
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Detecting Keyboard Press to start game
addEventListener("keydown", function() {
    if (gameActive === false) {
        gameActive = true;
        nextSequence();
    }
});

/**
 * Sleeps asynchronously. Must be used like "await sleep(ms);".
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Ends the game.
 */
function gameOver() {
    $("body").addClass("game-over");
    $("h1").html("Game Over!<br><small>Press a key or refresh to restart!</small>");
    var gameOverAudio = new Audio("./sounds/wrong.mp3");
    gameOverAudio.play();
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 500);
    startOver();
}

/**
 * Initializes variables to default values to allow the game to restart.
 */
function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    gameActive = false;
}