// wait the DOM to finish loading before running the game
// get the button elements and add event listener to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    // add keydown event listener to answer box
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })
    runGame("addition");
})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // focus the curser on answer box
    document.getElementById("answer-box").focus();
    // generating two random numbers
    let firstRandomNumber = Math.floor(Math.random() * 25) + 1;
    let secondRandomNumber = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(firstRandomNumber, secondRandomNumber);
    } else if (gameType === "subtract") {
        displaySubtractionQuestion(firstRandomNumber, secondRandomNumber);
    } else if (gameType === "multiply") {
        displayMultiplicationQuestion(firstRandomNumber, secondRandomNumber);
    } else if (gameType === "division") {
        displayDivisionQuestion(firstRandomNumber, secondRandomNumber);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

// function to check answer
/**
 * checks the answer aginst the first element
 * in the returned calculateCorrectAnswer
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();

    if (userAnswer === calculatedAnswer[0]) {
        alert(`Correct Answer!`)
        incrementScore();
    } else {
        alert(`OOPs, Wrong answer, The correct answer is: ${calculatedAnswer[0]}`)
        incrementWrongAnswer();
    }

    // Clear the answer box
    document.getElementById("answer-box").value = "";
    // by calling runGame function we can authomatically update the question
    runGame(calculatedAnswer[1])
}

/**
 * get the operands and operator directly from the DOM and return correct answer
 */
// function to calculate correct answer
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented oprator ${operator}`);
        throw `Unimplemented oprator ${operator}. Aborting!`;
    }

}

// function to increment score
/**
 * get the current score from the DOM and add it by 1
 */
function incrementScore() {
    let scoreElement = document.getElementById("score");
    let currentScore = parseInt(scoreElement.textContent);
    let newScore = currentScore + 1;
    scoreElement.textContent = newScore;
}

// function to increment wrong answer point
/**
 * get the current incorrect score from the DOM and add it by 1
 */
function incrementWrongAnswer() {
    let incorrectScoreElement = document.getElementById("incorrect");
    let currentIncorrectScore = parseInt(incorrectScoreElement.textContent);
    let newIncorrectScore = currentIncorrectScore + 1;
    incorrectScoreElement.textContent = newIncorrectScore;
}

// addition function
function displayAdditionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "+";
}

// subtract fucntion
function displaySubtractionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1 > num2 ? num1 : num2;
    document.getElementById("operand2").textContent = num1 > num2 ? num2 : num1;
    document.getElementById('operator').textContent = "-";
}

// multiply function
function displayMultiplicationQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "x";
}

// divide function
function displayDivisionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "/";
}

