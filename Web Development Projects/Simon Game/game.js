// Initialize variables
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameActive = false;

/**
 * Plays the next sequence in the simon game
 */
function nextSequence() {
    $("h1").text("Level: " + level);
    level++;
    var randomColor = buttonColors[randomNumberGenerator()];
    gamePattern.push(randomColor);
    gamePattern.push("blue");
    gamePattern.push("green");
    for (var i=0; i<gamePattern.length; i++) {
        animatePress(gamePattern[i]);
        playSound(gamePattern[i]);
        setTimeout(function() {}, 100);
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
});

/**
 * Animates a button press
 */
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Detecting Keyboard Press
addEventListener("keydown", function() {
    if (gameActive === false) {
        gameActive = true;
        nextSequence();
    }
});
