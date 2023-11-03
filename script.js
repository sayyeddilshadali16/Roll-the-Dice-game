let images = ["Images/dice-six-faces-one.png",
    "Images/dice-six-faces-two.png",
    "Images/dice-six-faces-three.png",
    "Images/dice-six-faces-four.png",
    "Images/dice-six-faces-five.png",
    "Images/dice-six-faces-six.png"];
let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue, dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },
        1000
    );
}
roll();

const audio = new Audio("Audio/dice-142528.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});