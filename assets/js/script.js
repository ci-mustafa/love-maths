// wait the DOM to finish loading before running the game
// get the button elements and add event listener to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
        })
    }
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // generating two random numbers
    let firstRandomNumber = Math.floor(Math.random() * 25) + 1;
    let secondRandomNumber = Math.floor(Math.random() * 25) + 1;
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplicationQuestion() {

}

function displayDivisionQuestion() {

}

