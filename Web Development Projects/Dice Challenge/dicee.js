/**
 * Gets a random number between 1-6 (inclusive)
 */
function getRandomRoll() {
    var randomRoll = Math.floor(Math.random()*6)+1;
    return randomRoll;
}

var roll1 = getRandomRoll();
var roll2 = getRandomRoll();

document.querySelector(".img1").setAttribute("src", "./images/dice" + roll1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + roll2 + ".png");

if (roll1 === roll2) {
    document.querySelector("h1").textContent = "Tie!";
}
else if (roll1 > roll2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (roll1 < roll2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}