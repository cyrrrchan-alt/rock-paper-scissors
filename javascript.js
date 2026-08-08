// Global variables for keeping score
let humanScore = 0;
let computerScore = 0;

// Randomly generate rock, paper, or scissors
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            // Rock
            let cpuChoice = "rock";
            break;
        case 1:
            // Paper
            let cpuChoice = "paper";
            break;
        case 2:
            // Scissors
            let cpuChoice = "scissors";
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

}

console.log(getHumanChoice());
//console.log(getComputerChoice());
