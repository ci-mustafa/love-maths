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
function checkAnswer() {
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
    } else if (operator === "*") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented oprator ${operator}`);
        throw `Unimplemented oprator ${operator}. Aborting!`;
    }

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
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "-";
}

// multiply function
function displayMultiplicationQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "*";
}

// divide function
function displayDivisionQuestion(num1, num2) {
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById('operator').textContent = "/";
}

