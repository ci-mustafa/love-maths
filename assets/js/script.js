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
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // generating two random numbers
    let firstRandomNumber = Math.floor(Math.random() * 25) + 1;
    let secondRandomNumber = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(firstRandomNumber, secondRandomNumber);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

// function to check answer
function checkAnswer() {

}

// function to calculate correct answer
function calculateCorrectAnswer() {

}

// function to increment score
function incrementScore() {

}

// function to increment wrong answer point
function incrementWrongAnswer() {

}

// addition function
function displayAdditionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "+";
}

// subtract fucntion
function displaySubtractionQuestion(num1, num2) {
    
}

// multiply function
function displayMultiplicationQuestion(num1, num2) {
    
}

// divide function
function displayDivisionQuestion(num1, num2) {
    
}

