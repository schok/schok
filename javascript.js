function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection, winStatus) {

    if (computerScore == 5 || playerScore == 5){
        return;
    }

    displayMoves(playerSelection, computerSelection);

    const displayComputerScore = document.querySelector('.computerScore');
    const displayPlayerScore = document.querySelector('.playerScore');

    if (playerSelection === computerSelection) {
        winStatus.textContent = `${playerSelection} ties with ${computerSelection}. it's a draw!`;
        winStatus.setAttribute('style', 'display:flex; justify-content:center;');
        return;
    } else if ((playerSelegiction === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;``
        winStatus.textContent = `${playerSelection} is beaten by ${computerSelection}. computer wins!`;
        displayComputerScore.textContent = `Computer score: ${computerScore}`;
        winStatus.setAttribute('style', 'display:flex; justify-content:center;');
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection == "paper")) {
        playerScore++;
        winStatus.textContent = `${playerSelection} beats ${computerSelection}. player wins!`;
        displayPlayerScore.textContent = `Player score: ${playerScore}`;
        winStatus.setAttribute('style', 'display:flex; justify-content:center;');
    }
    
    if (computerScore == 5 || playerScore == 5){
        determineWinner();
        winStatus.textContent = "";
        return;
    }

}

function displayMoves(playerSelection, computerSelection) {

    const playerMove = document.querySelector('.playerMove');
    playerMove.textContent = `Player move: ${playerSelection}`;

    const computerMove = document.querySelector('.computerMove');
    computerMove.textContent = `Computer move: ${computerSelection}`;
}

function determineWinner() {
    const outcome = document.querySelector('.outcome');

    if (computerScore == 5) {
        outcome.textContent = "GAME OVER. Try again.";
    } else if (playerScore == 5) {
        outcome.textContent = "You won against the computer! Congratulations!";
    }

    const retry = document.createElement('button');
    retry.textContent = "Retry?";
    retry.addEventListener('click', function() {
        window.location.reload();
    })
    outcome.appendChild(retry);
    //retry.setAttribute('style', 'display:block; margin: auto;');
    outcome.setAttribute('style', 'display:flex; flex-direction:column; margin:10px; align-items:center; gap:10px;');

}

function game(computerSelection) {

    const instructions = document.querySelector('.instructions');
    const winStatus = document.createElement('div');
    instructions.appendChild(winStatus);
    winStatus.setAttribute('style', 'margin-bottom: 15px;');

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', function () {
        computerSelection = getComputerChoice()
        playRound("rock", computerSelection, winStatus)

    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', function () {
        computerSelection = getComputerChoice()
        playRound("paper", computerSelection, playerScore, computerScore, winStatus)
    });

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', function () {
        computerSelection = getComputerChoice()
        playRound("scissors", computerSelection, playerScore, computerScore, winStatus)
    });

}

let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
game(computerSelection, playerScore, computerScore);