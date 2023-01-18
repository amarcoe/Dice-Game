var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Refresh Me";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}