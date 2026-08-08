// Global variables for keeping score
let humanScore = 0;
let computerScore = 0;

// Randomly generate rock, paper, or scissors
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let cpuChoice = "";

    switch(randomNum) {
        case 0:
            // Rock
            cpuChoice = "rock";
            break;
        case 1:
            // Paper
            cpuChoice = "paper";
            break;
        case 2:
            // Scissors
            cpuChoice = "scissors";
            break;
    }

    return cpuChoice;
}

// Get input from player
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");

    // Force input to be all in lower case
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // Tied 
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    // Player win conditions
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    }
    // Computer win conditions
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
