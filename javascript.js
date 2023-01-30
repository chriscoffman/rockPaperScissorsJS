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
        return 0;
    } else if (outcome === -2 || outcome === 1) {
        console.log(`You win! ${gameOptions[playerSelection]} beats ${gameOptions[computerSelection]}`);
        return 1;
    } else {
        console.log(`You lose! ${gameOptions[computerSelection]} beats ${gameOptions[playerSelection]}`);
        return -1;
    }
}


function game() {
    let wins = 0;
    for (let i = 0; i < 5; i++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());
        wins += result;
    }
    if (wins > 0) {
        console.log('You have defeated the computer!');
    } else {
        console.log('You have lost to the computer.');
    }
}

game();