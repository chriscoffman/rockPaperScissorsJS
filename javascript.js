var gameOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const aiChoiceInt = Math.floor(Math.random() * gameOptions.length);
    return aiChoiceInt
}

function getPlayerChoice() {
    const playerChoiceInt = gameOptions.indexOf(prompt("Type rock, paper, or scissors").toLowerCase());
    if (playerChoiceInt === -1) {
        getPlayerChoice();
    } else {
        return playerChoiceInt;
    }
}

function playRound(playerSelection, computerSelection) {
    const outcome = (+playerSelection) - (+computerSelection);
    if (outcome  === 0) {
        console.log("It is a tie!");
    } else if (outcome === -2 || outcome === 1) {
        console.log(`You win! ${gameOptions[playerSelection]} beats ${gameOptions[computerSelection]}`);
    } else {
        console.log(`You lose! ${gameOptions[computerSelection]} beats ${gameOptions[playerSelection]}`);
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();