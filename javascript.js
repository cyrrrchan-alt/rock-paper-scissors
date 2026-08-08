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

console.log(getComputerChoice());