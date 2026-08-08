// Randomly generate rock, paper, or scissors
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let cpuChoice = "";

    switch(randomNum) {
        case 0:
            // Rock
            cpuChoice = "Rock";
            break;
        case 1:
            // Paper
            cpuChoice = "Paper";
            break;
        case 2:
            // Scissors
            cpuChoice = "Scissors";
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

console.log(getHumanChoice());
//console.log(getComputerChoice());
