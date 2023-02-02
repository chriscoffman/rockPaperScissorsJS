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
        loss_or_win_line.textContent = "It is a tie!"
    } else if (outcome === -2 || outcome === 1) {
        loss_or_win_line.textContent = `You won! ${gameOptions[playerSelection]} beats ${gameOptions[computerSelection]}!`
        score += 1;
        score_content.textContent = `The score is ${score}`;
        if (score > 4){
            alert("You have beaten a simple machine, congratulations!");
            score = 0;
            score_content.textContent = `The score is ${score}`;
        }
    } else {
        loss_or_win_line.textContent = `You lose! ${gameOptions[computerSelection]} beats ${gameOptions[playerSelection]}`;
        score -= 1;
        score_content.textContent = `The score is ${score}`;
        if (score < -4){
            alert("You have lost to a simple machine, congratulations!");
            score = 0;
            score_content.textContent = `The score is ${score}`;
        }
        }
}
const container = document.querySelector('#container');
let score = 0;
const score_content = document.createElement('div');
score_content.textContent = `The score is ${score}`;
const loss_or_win_line = document.createElement('div');
container.appendChild(loss_or_win_line);
container.appendChild(score_content);
const myBtnList = document.querySelectorAll('button');
myBtnList.forEach(button => button.addEventListener('click',
() => playRound(button.id, getComputerChoice())));

